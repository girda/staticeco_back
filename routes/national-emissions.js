const express = require('express');
const router = express.Router();
const controller = require('../controllers/national-emissions');


router.get("/", controller.years);
router.get("/:id", controller.substances);
router.post("/", controller.table);


module.exports = router;
