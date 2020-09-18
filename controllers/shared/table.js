const transformData = require('../../util/transform-data');
const mySqlDatabase = require('../../connections-database');

module.exports = (req, res) => {
    try {
        console.log(req.body);
        let start = req.body.start;
        let filterModel = null;
        let limit = req.body.limit;

        if (req.body.params) {
            filterModel = req.body.params.filterModel;
            start = req.body.params.startRow;
            limit = req.body.params.endRow - req.body.params.startRow;
        }

        let query = `SELECT * FROM ${req.body.table} `;

        if (filterModel && Object.keys(filterModel).length) {
            const keys = Object.keys(filterModel);
            keys.forEach((key, i) => {
                if (i === 0) {
                    query += `WHERE ${key} = ${filterModel[key].filter} `;
                } else {
                    query += `AND ${key} = ${filterModel[key].filter} `;
                }

            });
        } else {
            query += `LIMIT ${start}, ${limit}`;
        }
        console.log(query);
        mySqlDatabase.query(query, (err, rows, fields) => {
            // console.log(rows);

            if (rows && rows.length) {
                rows = rows.map(row => {
                    const rowKeysArr = Object.keys(row);

                    return rowKeysArr.reduce((newObj, key) => {
                        newObj[key.toLowerCase()] = row[key];
                        return newObj
                    }, {})
                });

                res.status(200).json(transformData.table(rows, start, limit));
            } else {
                res.status(200).json({rows: [], description: [], totalRows: 0});
            }


        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
