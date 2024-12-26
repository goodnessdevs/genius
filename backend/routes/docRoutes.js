const express = require('express');
const {
    getDocs,
    createDoc
} = require('../controllers/docController');

const router = express.Router();

// Endpoint to get quiz questions
router.get('/', getDocs);

// Endpoint to create questions
router.post('/generateDocumentary', createDoc);

module.exports = router;