const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

//1 tuyến đường
// Nếu là tuyến đường này thì chọc vào phương thức index
router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;
