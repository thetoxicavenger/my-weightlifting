var express = require('express');
var router = express.Router();
const usersController = require('../../controllers/users')

router.get('/', usersController.getAllUsers)

module.exports = router