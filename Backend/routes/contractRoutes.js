import express from 'express';
import { createContract, getContracts } from '../controllers/contractController.js';

const router = express.Router();

// Routes
router.post('/', createContract);         // Create a new contract
router.get('/', getContracts);            // Get all contracts

export default router;
