import express from 'express';
import { createReview, getReviewsByFarmer } from '../controllers/reviewController.js';

const router = express.Router();

// Routes
router.post('/', createReview);              // Add a review
router.get('/:farmerId', getReviewsByFarmer); // Get reviews for a farmer

export default router;
