const { Pool } = require('pg');
const dbconfig = require('../config/db.config');

const db = new Pool(dbconfig);

const getBooks = async (req, res) => {
    const response = await db.query('SELECT * FROM books');
    res.status(200).json(response.rows);
};

module.exports = {
    getBooks,
}