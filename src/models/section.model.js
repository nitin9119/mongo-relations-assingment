const mongoose = require("mongoose");

// Section Mongoose
const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    book_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "book", 
  }]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("section", sectionSchema); // posts collection
