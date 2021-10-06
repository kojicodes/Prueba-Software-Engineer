const { Router } = require('express');
const { getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/users');

const router = Router();
//Routes

module.exports = router;