const { Pool } = require('pg');
const dbconfig = require('../config/db.config');

const db = new Pool(dbconfig);

const getBooks = async (req, res) => {
    const response = await db.query('SELECT * FROM books');
    res.status(200).json(response.rows);
};

const createBook = async (req, res) => {
    const { title, editorial, author, published } = req.body;
    const response = await db.query('INSERT INTO books (title, editorial, author, published) VALUES ($1, $2, $3, $4)', [title, editorial, author, published])
    console.log(response);
    res.json({
        message: 'Book added succesfully',
        body: {
            book: {
                title,
                editorial,
                author,
                published}
        }
    })
};

module.exports = {
    getBooks,
    createBook
}