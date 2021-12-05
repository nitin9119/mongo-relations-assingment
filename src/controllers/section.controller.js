const express = require("express");

const Section = require("../models/section.model");
const Book = require("../models/book.model");

const router = express.Router();

// /posts "/:id" get
router.post("", async(req, res)=>{
  try {
    const item = await Section.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

//get request
router.get("", async(req,res) => {
    try {
      const items = await Section.find().populate({path:"book_id",select:"name"}).lean().exec();
  
      return res.send(items);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  }
);

// router.get("/:checkout", async(req, res)=>{
//   try {
//     const items = await Book.find({checkout:req.params.checkout}).lean().exec();

//     return res.send(items);
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

router.get("/:id", async(req,res) => {
  try {
    const items = await Section.find({_id:req.params.id});
    
    return res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
}
);

//delete request
router.delete("/:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id).lean().exec();

    return res.send(section);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
