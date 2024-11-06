const express = require('express');
const router = express.Router();
const UsersController = require('../app/controllers/UsersController');

//định nghĩa các tuyến đường và gắn handler
router.get('/', UsersController.index);
router.post('/', UsersController.post);

module.exports = router;
