const express = require("express");

const Checkout = require("../models/checkout.model");
const Book = require("../models/book.model");

const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const item = await Book.findByIdAndUpdate(req.params.id, {checkout: true},{new:true});

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
})

/** find books that are checked out || or not checked out*/
router.get("/:checkout", async(req, res)=>{
  try {
    const items = await Book.find({checkout:req.params.checkout}).lean().exec();

    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    const checkout = await Checkout.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(checkout);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;
