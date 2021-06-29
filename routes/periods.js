const express = require('express');
const router = express.Router();
const controller = require('../controllers/periods');

router.get("/", controller.getAll);

module.exports = router;
