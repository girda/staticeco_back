const mySqlDatabase = require('../../connections-database');
const transformData = require('../../util/transform-data');

module.exports = (req, res) => {
    try {
        mySqlDatabase.query(`SELECT tr_par1_id, tr_table FROM table_route where tr_period = ${req.params.id}`, (err, rows, fields) => {
            const response = transformData.substances(rows);
            res.status(200).json(response)
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
