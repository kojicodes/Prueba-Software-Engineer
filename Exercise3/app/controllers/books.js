const { Pool } = require('pg');
const dbconfig = require('../config/db.config');

const db = new Pool(dbconfig);

const getBooks = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM books');
        res.status(200).json(response.rows);
    } catch(err) {
        console.log(err);
    }
};

const createBook = async (req, res) => {
    try {
        const { title, editorial, author, published } = req.body;
        const response = await db.query('INSERT INTO books (title, editorial, author, published) VALUES ($1, $2, $3, $4)', [title, editorial, author, published])
        console.log(response);
        res.status(200).json({
            message: 'Book added succesfully',
            body: {
                book: {
                    title,
                    editorial,
                    author,
                    published}
            }
        });
    } catch(err) {
        console.log(err);
    }
};

const getBookby = async (req, res) => {
    try {
        const {title, editorial, author, published } = req.query;
        const response = await db.query('SELECT * FROM books WHERE title=$1 OR editorial=$2 OR author=$3 OR published=$4', [title, editorial, author, published]);
        res.status(200).json(response.rows);
    } catch(err) {
        console.log(err);
    }
};

const updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, editorial, author, published } = req.body;
        const response = await db.query('UPDATE books SET title=$1, editorial=$2, author=$3, published=$4 WHERE id=$5', [title, editorial, author, published, id]);
        console.log(response);
        res.status(200).json('Book info updated succesfully');
    } catch(err){
        console.log(err);
    }
};

const deleteBook = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await db.query('DELETE FROM books WHERE id=$1', [id]);
        res.status(200).json(`Book ${id} deleted succesfully`);

    } catch(err) {
        console.log(err)
    }
};

module.exports = {
    getBooks,
    createBook,
    getBookby,
    updateBook,
    deleteBook
}