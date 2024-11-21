import Order from "../models/orderModel.js";

// Create Order
export const createOrder = async (req, res) => {
  const { contract, buyer } = req.body;

  try {
    const order = await Order.create({ contract, buyer });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("contract")
      .populate("buyer", "name email");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
