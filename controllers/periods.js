const mySqlDatabase = require('../connections-database');

module.exports.getAll = (req, res) => {
    console.log(req.body)
    mySqlDatabase.query('SELECT * FROM periods', (err, rows, fields) => {
        res.json(rows);
    });
};

