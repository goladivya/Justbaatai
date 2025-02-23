const FAQ = require('../models/faqModel');
const axios = require('axios');

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports. askChatbot = async (req, res) => {
    const { question } = req.body;
    if (!question) {
        return res.status(400).json({ error: "No question provided" });
    }

    try {
        // Search for the answer in MongoDB
        const faq = await FAQ.findOne({ question: { $regex: new RegExp(question, "i") } });

        if (faq) {
            return res.json({ answer: faq.answer });
        } else {
            return res.json({ answer: "I don't know the answer to that. Try another question!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports. addFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;

        if (!question || !answer) {
            return res.status(400).json({ error: "Both question and answer are required." });
        }

        const newFAQ = new FAQ({ question, answer });
        await newFAQ.save();

        res.status(201).json({ message: "FAQ added successfully", faq: newFAQ });
    } catch (error) {
        console.error("Error adding FAQ:", error);
        res.status(500).json({ error: "Server error while adding FAQ." });
    }
};

exports.updateFAQ = async (req, res) => {
    try {
        const { answer } = req.body;
        const updatedFAQ = await FAQ.findByIdAndUpdate(req.params.id, { answer }, { new: true });
        res.json(updatedFAQ);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFAQ = async (req, res) => {
    try {
        await FAQ.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
