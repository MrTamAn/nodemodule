//quản lý các route liên quan đến news
const express = require('express');
const router = express.Router(); //tạo đối tượng route bằng express
const NewsController = require('../app/controllers/NewsController'); //nạp function handler

//định tuyến cho từng route và gắn handler
router.use('/:slug', NewsController.slug);
router.use('/', NewsController.index);

module.exports = router;
