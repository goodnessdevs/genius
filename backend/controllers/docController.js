const mongoose = require("mongoose");
const Documentary = require("../models/documentaryModel");

// get all questions
const getDocs = async (req, res) => {
  const docs = await Documentary.find({}).sort({ createdAt: -1 });

  res.status(200).json(docs);
};

// create new question
const createDoc = async (req, res) => {
  const { writeUp } = req.body;

  try {
    const doc = await Documentary.create({
      writeUp,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = {
  getDocs,
  createDoc,
};
