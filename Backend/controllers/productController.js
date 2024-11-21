import Product from "../models/prductModel.js";

// Add Product
export const createProduct = async (req, res) => {
  const { name, description, quantity, pricePerUnit, farmer } = req.body;

  console.log(req.body);
  

  try {
    const product = await Product.create({
      name,
      description,
      quantity,
      pricePerUnit,
      farmer,
    });
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("farmer", "name email");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "farmer",
      "name email"
    );
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
