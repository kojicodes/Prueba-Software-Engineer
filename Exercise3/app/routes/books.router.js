const { Router } = require('express');
const { getBooks } = require('../controllers/books');
const router = Router();

//Routes
router.get('/books', getBooks);

module.exports = router;