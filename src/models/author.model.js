const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    f_name: { type: String, required: true ,unique: true},
    l_name: { type: String, required: false },
    book_id: [{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      unique: false,
      ref: "book",
      
  }]
},
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("author", authorSchema); // users
