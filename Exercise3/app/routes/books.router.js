const { Router } = require('express');
const { getBooks, createBook } = require('../controllers/books');
const router = Router();

//Routes
router.get('/books', getBooks);
router.post('/books', createBook);

module.exports = router;