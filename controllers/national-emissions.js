const mySqlDatabase = require('../connections-database');
const emissionsId = 1;

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

// module.exports.substances = (req, res) => {
//     try {
//         mySqlDatabase.query(`SELECT tr_par1_id, tr_table FROM table_route where tr_period = ${req.params.id}`, (err, rows, fields) => {
//             const response = transformData.substances(rows);
//             res.status(200).json(response)
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };
//
// module.exports.table = controllerTable;
