const mySqlDatabase = require('../connections-database');
const transformData = require('../util/transform-data');
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

module.exports.substances = (req, res) => {
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

module.exports.table = (req, res) => {
    try {
        mySqlDatabase.query(`SELECT * FROM ${req.body.table} LIMIT ${req.body.start}, ${req.body.limit}`, (err, rows, fields) => {
            rows = rows.map((el) => {
                return Object.keys(el).reduce((c, k) => (c[k.toLowerCase()] = el[k], c), {})
            });
            res.status(200).json(transformData.table(rows, global.description));
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
// router.get("/:id", (req, res) => {
//     console.log(req.params.id)
//     // res.send([{title: 2020, origin: '2020_2'}])
// });
//
//
// router.post("/", (req, res) => {
//     // if(!req.body.param){
//     //     res.send({title: 2020, origin: '2020_2'})
//     // }else {
//     returnData(req, res)
//     // }
//
// });
