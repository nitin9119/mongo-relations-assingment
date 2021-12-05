const mongoose = require("mongoose");

// Tags Mongoose => Post and Tags are in a many to many relationship
const checkoutSchema = new mongoose.Schema(
  {
    book_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "book", 
  }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("checkout", checkoutSchema); // tags collection
