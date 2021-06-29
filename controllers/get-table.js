const mySqlDatabase = require('../connections-database');


module.exports.getTable = (req, res) => {
    console.log(req.body);
    const classifier = req.body.classifier;
    const periods = req.body.periods.join();
    const regions = req.body.regions.join();
    const query = `call ecoportal.sp_report(${classifier},'${periods}','${regions}',null,null,null)`;
    mySqlDatabase.query(query, (err, rows, fields) => {
        res.json(rows);
    });
};

