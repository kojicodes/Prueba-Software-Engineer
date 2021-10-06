const { Router } = require('express');
const { getBooks, createBook, getBookby, updateBook, deleteBook } = require('../controllers/books');
const router = Router();

//Routes
router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/find', getBookby);
router.put('/books/:id', updateBook);
router.delete('/books:id', deleteBook);

module.exports = router;