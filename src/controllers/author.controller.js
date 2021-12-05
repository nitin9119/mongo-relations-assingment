const express = require("express");

const Author = require("../models/author.model");

const router = express.Router();

// TO GET A THE AUTHORS----------------------------------------------------------------
router.get("", async (req, res) => {
    try {
        const items = await Author.find().lean().exec();
    
        return res.send(items);
      } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
      }
});

router.get("/:author", async(req, res) => {
  try {
    const item = await Author.find({_id:req.params.author}).populate({path:"book_id"}).lean().exec();

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// TO SAVE NEW AUHTORS CREDENTIALS
router.post("", async(req, res) => {
  try {
    const item = await Author.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});



//TO UPDATE EXISTING AUTHORS DETAILS
router.patch("/:id", async(req,res)=>{
  try {
    const item = await Author
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

//TO DELETE ANY AUHTOR
router.delete("/:id", async (req, res) => {
  try {
    const item = await Author.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
