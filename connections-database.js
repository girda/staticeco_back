const mySql = require('mysql');
const keys = require('./config/keys');

const mySqlDatabase = mySql.createConnection(keys.mySql);

mySqlDatabase.connect((error) => {
    error ? console.log(error.sqlMessage) : console.log(`Connected to MySql - database ${keys.mySql.database}`)
});

mySqlDatabase.query("SELECT * FROM field_descriptions", (err, rows, fields) => {
    try {
        global.description = rows.map(row => {
            row.fd_code = row.fd_code.toLowerCase();
            return {
                origin: row.fd_code,
                description: row.fd_name
            }
        });
    } catch (error) {
        console.log(error)
    }
});

mySqlDatabase.query("SELECT * FROM substances", (err, rows, fields) => {
    try {
        global.substances = rows.map(row => {
            return {
                ss_code: row.ss_code,
                ss_name: row.ss_name
            }
        });
    } catch (error) {
        console.log(error)
    }
});
module.exports = mySqlDatabase;
