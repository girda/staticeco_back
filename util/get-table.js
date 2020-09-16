const mySqlDatabase = require('../connections-database');

module.exports = ({table, start, limit}) => {
    return new Promise(resolve => {
        mySqlDatabase.query(`SELECT * FROM ${table} LIMIT ${start}, ${limit}`, (err, rows, fields) => {
            // console.log(rows)
            rows = rows.map(row => {
                const rowKeysArr = Object.keys(row);

                return rowKeysArr.reduce((newObj, key) => {
                    newObj[key.toLowerCase()] = row[key];
                    return newObj
                }, {})
            });
            // console.log(rows)
            resolve(rows)
        });
    });
};
