import Contract from '../models/contractModel.js';

// Create Contract
export const createContract = async (req, res) => {
  const { farmer, buyer, product, quantity, price, startDate, endDate } = req.body;

  try {
    const contract = await Contract.create({
      farmer,
      buyer,
      product,
      quantity,
      price,
      startDate,
      endDate,
    });

    res.status(201).json({ message: 'Contract created successfully', contract });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Contracts
export const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find()
      .populate('farmer', 'name email')
      .populate('buyer', 'name email')
      .populate('product', 'name pricePerUnit');

    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
