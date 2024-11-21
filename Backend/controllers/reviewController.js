import Review from "../models/reviewModel.js";

// Add Review
export const createReview = async (req, res) => {
  const { order, buyer, farmer, rating, comment } = req.body;

  try {
    const review = await Review.create({
      order,
      buyer,
      farmer,
      rating,
      comment,
    });
    res.status(201).json({ message: "Review added successfully", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Reviews for Farmer
export const getReviewsByFarmer = async (req, res) => {
  try {
    const reviews = await Review.find({ farmer: req.params.farmerId }).populate(
      "buyer",
      "name email"
    );
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
