﻿const express = require('express');
const router = express.Router();
const controller = require('../controllers/regions');

router.get("/", controller.getAll);

module.exports = router;
