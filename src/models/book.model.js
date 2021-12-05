const mongoose = require("mongoose");

// Comment Mongoose => Post and comment are one to many relationship
const bookSchema = new mongoose.Schema(
  {
    name:{ type: String, required: true},
    body: { type: String, required: true },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      unique: false
      
    },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: false,
    },
    checkout: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema); // comments collection
