const express = require("express");


const Book = require("../models/book.model");
const Author = require("../models/author.model");

const router = express.Router();

//TO ADD NEW BOOKS DETAILS
router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.status(201).send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {

    const authorname= await Author.find({_id:req.params.id});
    const book = await Book.find({author_id: req.params.id}).lean().exec();

    return res.status(201).send({"Authors name":authorname[0].f_name+" "+authorname[0].l_name, book});
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

//TO GET ALL THE EXISTING BOOKS
router.get("", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


//router.get("/:id", crudController.getOne(Comment));
//FOR UPDATE BOOK DETAILS
router.patch("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

//FOR DELETE BOOK DATA
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    return res.send(book);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
