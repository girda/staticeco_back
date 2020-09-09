const mySqlDatabase = require('../connections-database');
const transformData = require('../util/transform-data');
const costsId = 2;

module.exports.years = (req, res) => {
    mySqlDatabase.query(`SELECT tr_period, tr_table FROM table_route where tr_subject_id = ${costsId}`, (err, rows, fields) => {
        res.status(200).json(rows)
    });
};

module.exports.tables = (req, res) => {
    try {
        mySqlDatabase.query(`SELECT * FROM ${req.body.table} LIMIT ${req.body.start}, ${req.body.limit}`, (err, rows, fields) => {
            rows = rows.map((el) => {
                return Object.keys(el).reduce((c, k) => (c[k.toLowerCase()] = el[k], c), {})
            });
            res.status(200).json(transformData.table(rows, global.description));
        })
    } catch (error) {
        console.log(error)
    }
};

