const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});

const FAQ = mongoose.model('justbaat', faqSchema, 'justbaat');  

module.exports = FAQ;
