import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';

const router = express.Router();

// Routes
router.post('/', createOrder);           // Create an order
router.get('/', getOrders);              // Get all orders

export default router;
