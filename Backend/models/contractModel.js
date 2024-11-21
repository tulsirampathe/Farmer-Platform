import mongoose from "mongoose";

const { Schema } = mongoose;

const contractSchema = new Schema({
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Active", "Completed", "Cancelled"],
    default: "Pending",
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

const Contract = mongoose.model("Contract", contractSchema);
export default Contract;
