const express = require('express');
const router = express.Router();
const controller = require('../controllers/national-waste');
const controllerSubstances = require('../controllers/shared/substances');
const controllerTable = require('../controllers/shared/table');

router.get("/", controller.years);
router.get("/:id", controllerSubstances);
router.post("/", controllerTable);


module.exports = router;
