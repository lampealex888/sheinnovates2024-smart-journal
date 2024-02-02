import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
    },
    date: {
      type: Date,
      required: [true, "Please provide date"],
    },
    content: {
      type: String,
      required: [true, "Please provide body"],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Entry || mongoose.model("Entry", EntrySchema)
