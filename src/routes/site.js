const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

//1 tuyến đường
// Nếu là tuyến đường này thì chọc vào phương thức index
router.use('/:slug', siteController.search);

router.use('/', siteController.index);

module.exports = router;
