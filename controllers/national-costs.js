const mySqlDatabase = require('../connections-database');
const controllerTable = require('./shared/table');
const costsId = 2;

module.exports.years = (req, res) => {
    mySqlDatabase.query(`SELECT tr_period, tr_table FROM table_route where tr_subject_id = ${costsId}`, (err, rows, fields) => {
        res.status(200).json(rows)
    });
};

