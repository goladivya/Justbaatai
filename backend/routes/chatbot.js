const express = require('express');
const { getFAQs, askChatbot, addFAQ, updateFAQ, deleteFAQ } = require('../controllers/chatbotController');
const router = express.Router();

router.get('/', getFAQs);
router.post('/ask', askChatbot);
router.post('/faq', addFAQ);
router.put('/:id', updateFAQ);
router.delete('/:id', deleteFAQ);

module.exports = router;
