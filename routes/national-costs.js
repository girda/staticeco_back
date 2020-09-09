const express = require('express');
const router = express.Router();
const controller = require('../controllers/national-costs');

router.get("/", controller.years);
router.post("/", controller.tables);

module.exports = router;
