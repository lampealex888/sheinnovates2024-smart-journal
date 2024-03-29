import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Please provide title"],
  },
  content: {
    type: String,
    required: [true, "Please provide body"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users._id",
    required: [true, "Please provide user ID"],
  },
});

const Journal =
  mongoose.models.journals || mongoose.model("journals", journalSchema);

export default Journal;
