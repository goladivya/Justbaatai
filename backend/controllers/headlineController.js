const express = require('express');

const Headline = require('../models/headlineModel');


exports.getHeadlines = async (req, res) => {
    try {
        const headlines = await Headline.find();
        res.json(headlines);
    } catch (error) {
        res.status(500).json({ error: "Error fetching headlines" });
    }
};


exports.addHeadline = async (req, res) => {
    try {
        const { headline, conspiracyScore, category } = req.body;
        const newHeadline = new Headline({ headline, conspiracyScore, category });
        await newHeadline.save();
        res.status(201).json(newHeadline);
    } catch (error) {
        res.status(400).json({ error: "Error adding headline" });
    }
};


exports.updateHeadline = async (req, res) => {
    try {
        const updatedHeadline = await Headline.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedHeadline);
    } catch (error) {
        res.status(400).json({ error: "Error updating headline" });
    }
};


exports.deleteHeadline = async (req, res) => {
    try {
        await Headline.findByIdAndDelete(req.params.id);
        res.json({ message: "Headline deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting headline" });
    }
};




