const transformData = require('../../util/transform-data');
const getTable = require('../../util/get-table');

module.exports = (req, res) => {
    try {
        getTable({
            table: req.body.table,
            start: req.body.start,
            limit: req.body.limit
        })
            .then(rows => {
                res.status(200).json(transformData.table(rows, global.description));
            })
            .catch(error => {
                console.log(error);
                res.status(500).send(error);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
