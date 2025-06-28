import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  institute: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  year: {
    type: [String],
    default: []
  }
});

export default mongoose.models.Education || mongoose.model("Education", educationSchema);