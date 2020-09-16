const mySqlDatabase = require('../connections-database');
const emissionsId = 3;

module.exports.years = (req, res) => {
    try {
        mySqlDatabase.query(`SELECT tr_period FROM table_route where tr_subject_id = ${emissionsId}`, (err, rows, fields) => {
            res.status(200).json(rows)
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
