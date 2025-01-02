const mongoose = require("mongoose");
const Documentary = require("../models/documentaryModel");

// get all docs
const getDocs = async (req, res) => {
  const docs = await Documentary.find({}).sort({ createdAt: -1 });

  res.status(200).json(docs);
};

// get a single doc
const getOneDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such documentary"})
  }

  const doc = await Documentary.findOne({ _id: id });

  if (!doc) {
    return res.status(400).json({ error: "No such documentary" });
  }

  res.status(200).json(doc);
}

// create new doc
const createDoc = async (req, res) => {
  const { name, earlyLife, earlyCareer, achievements, laterLife, impact } =
    req.body;

  try {
    const doc = await Documentary.create({
      name,
      earlyLife,
      earlyCareer,
      achievements,
      laterLife,
      impact,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

// update doc
const updateDoc = async (req, res) => {
  const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such document'});
    }

    const doc = await Documentary.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!doc) {
        return res.status(400).json({error: 'No such document'});
    }

    res.status(200).json(doc);
}

// delete doc
const deleteDoc = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such documentary" });
  }

  const doc = await Documentary.findOneAndDelete({ _id: id });

  if (!doc) {
    return res.status(400).json({ error: "No such documentary" });
  }

  res.status(200).json(doc);
};

module.exports = {
  getDocs, 
  getOneDoc, 
  createDoc, 
  updateDoc, 
  deleteDoc,
};