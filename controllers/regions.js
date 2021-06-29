const mySqlDatabase = require('../connections-database');

module.exports.getAll = (req, res) => {
    console.log(req.body)
    mySqlDatabase.query('SELECT * FROM v_regions', (err, rows, fields) => {
        res.json(rows);
    });
};

