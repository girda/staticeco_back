const mySqlDatabase = require('../connections-database');


module.exports.login = (req, res) => {
    console.log(req.body)

    mySqlDatabase.query("call ecoportal.sp_report(4, '2007' ,null ,null ,  null,null )", (err, rows, fields) => {
        console.log(err)
        console.log(rows)
        console.log(fields)
        res.json({err, rows, fields});
    })
    //
    // mySqlDatabase.query('SELECT * FROM subjects', (err, rows, fields) => {
    //     console.log(rows)
    // })

};

