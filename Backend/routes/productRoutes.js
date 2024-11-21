import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController.js";
import Product from "../models/prductModel.js";
import multer from "multer";

const router = express.Router();

// Routes
// router.post("/", createProduct); // Add a new product
router.get("/", getProducts); // Get all products
router.get("/:id", getProductById); // Get product by ID

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  const { name, description, quantity, pricePerUnit, farmer } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const product = await Product.create({
      name,
      description,
      quantity,
      pricePerUnit,
      farmer,
      image,
    });
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
