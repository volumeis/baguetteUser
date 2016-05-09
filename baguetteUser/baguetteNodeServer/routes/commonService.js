var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var c = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baguette'
});

/* GET users listing. */
//var sql = 'SELECT * FROM store';
//var params = 
c.connect();
router.get('/', function (req, res, next) {

    c.query('SELECT  FROM store', function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {

            //            console.dir( rows);
            //console.log('fields', fields);
            //console.log('하하하하');
            for (var i = 0; i < rows.length; i++) {

                console.log(rows[i].STEL);
            }
            res.send(rows[1].SNAME);
        }
    });
    // res.send('respond with a resource');

});


module.exports = router;

//c.end();