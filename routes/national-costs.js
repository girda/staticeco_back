const express = require('express');
const router = express.Router();
const controller = require('../controllers/national-costs');
const controllerTable = require('../controllers/shared/table');

router.get("/", controller.years);
router.post("/", controllerTable);

module.exports = router;
