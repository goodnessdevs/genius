const express = require('express');
const {
    getDocs, 
    getOneDoc, 
    createDoc, 
    updateDoc, 
    deleteDoc 
} = require('../controllers/docController');

const router = express.Router();

// Endpoint to get all docs
router.get('/', getDocs);

// Endpoint to a single doc
router.get('/:id', getOneDoc);

// Endpoint to create doc
router.post('/generateDocumentary', createDoc);

// Endpoint to update doc
router.patch('/:id', updateDoc);

// Endpoint to delete doc
router.delete('/:id', deleteDoc);

module.exports = router;