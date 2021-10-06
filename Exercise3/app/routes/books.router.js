const { Router } = require('express');
const { getBooks, createBook, getBookby } = require('../controllers/books');
const router = Router();

//Routes
router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/find', getBookby);

module.exports = router;