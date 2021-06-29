const express = require('express');
const router = express.Router();
const controller = require('../controllers/get-table');

router.post("/", controller.getTable);

module.exports = router;
