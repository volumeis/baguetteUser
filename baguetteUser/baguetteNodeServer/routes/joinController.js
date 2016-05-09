var express = require('express');
var router = express.Router();
var sess;
/* GET users listing. */
router.get('/sendSms', function (req, res, next) {

    var reqNum = req.query.phone;
    var reqCode = req.query.rannum;
    sess = req.session;
    sess.joinCode = reqCode;
    console.log('session rannum1 : ' + '['+reqNum+']');
//    console.log('session rannum2 : ' + c.RECEIVERS);
    
    var c = require('./conf');
    c.RECEIVERS.push(reqNum);
    var https = require("https");
    var credential = 'Basic ' + new Buffer(c.APPID + ':' + c.APIKEY).toString('base64');
    //RECEIVERS
    var data = {
        "sender": c.SENDER,
        "receivers": c.RECEIVERS,
        "content": c.CONTENT_HEAD + reqCode + c.CONTENT_TAIL
    }
    var body = JSON.stringify(data);

    var options = {
        host: 'api.bluehouselab.com',
        port: 443,
        path: '/smscenter/v1.0/sendsms',
        headers: {
            'Authorization': credential,
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(body)
        },
        method: 'POST'
    };
    var req = https.request(options, function (res) {
        console.log(res.statusCode);
        var body = "";
        res.on('data', function (d) {
            body += d;
        });
        res.on('end', function (d) {
            if (res.statusCode == 200)
                console.log(JSON.parse(body));
            else
                console.log(body);
        });
    });
    req.write(body);
    req.end();
    req.on('error', function (e) {
        console.error(e);
    });
    res.send(
        ' 전화번호  : ' + req.query.phone + ' 가 요청했다.\n' +
        ' 전화번호  : ' + reqNum + ' 가 요청했다.\n' +
        ' 랜덤번호는 : ' + req.query.rannum + ' 입니다. ');
});
router.get('/checkCode', function (req, res, next) {
    console.log('session rannum : ' + sess.joinCode);
    if (sess.joinCode == req.query.joinCode) {
        console.log('오굿');
        res.json('ok');
    }else{
        res.json('no');
    }
});
//router.get('/checkTel', function (req, res, next) {
//    console.log('session rannum : ' + sess.joinCode);
//    if (sess.joinCode == req.query.joinCode) {
//        console.log('오굿')
//    }
//    res.send('okok');
//});
//router.get('/checkPwd', function (req, res, next) {
//    console.log('session rannum : ' + sess.joinCode);
//    if (sess.joinCode == req.query.joinCode) {
//        console.log('오굿')
//    }
//    res.send('okok');
//});






module.exports = router;