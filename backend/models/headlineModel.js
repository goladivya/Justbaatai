const mongoose = require('mongoose');

const headlineSchema = new mongoose.Schema({
    headline: { type: String, required: true },
    conspiracyScore: { type: Number, required: true, min: 0, max: 100 },
    category: { type: String, enum: ['Clickbait', 'Misinformation', 'Neutral'], required: true }
});

const Headline = mongoose.model('Headline', headlineSchema, 'headlines');

module.exports = Headline;
