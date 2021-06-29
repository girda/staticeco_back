const express = require('express');
const router = express.Router();
const controller = require('../controllers/subjects');

router.get("/", controller.getAll);

module.exports = router;
