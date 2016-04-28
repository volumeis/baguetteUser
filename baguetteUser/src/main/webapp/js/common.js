/**
 * 프론트엔드_공통기능
 */

//민호 pc tomcat 서버
//var COMMONWEBSERVER = "http://java78bit404.iptime.org:8025";
var COMMONWEBSERVER = "";

//민호 pc database 서버
//var COMMONDBSERVER = "http://java78bit404.iptime.org:3025";
var COMMONDBSERVER = "";

//depreciate
//var COMMONDBSERVER = "http://java78bit404.iptime.org:5025";

//민호 pc node.js 서버
//var COMMONNODESERVER = "http://java78bit404.iptime.org:3025";

var LOGIN_NO;
var LOGIN_ID;
var LOGIN_PW;
var QUERYSTRING;
/**
 *       쿼리스트링 추출
 *
 *       작성일 : 04.20.16
 *       작성자 : 유민호
 */
function getParameter(qs) {
    var value = '';
    var address = unescape(location.href);
    var param= (address.slice(address .indexOf('?') + 1, address .length)).split('&');
    for (var i = 0; i < param.length; i++) {
        var name = param[i].split('=')[0];
        if (name.toUpperCase() == qs.toUpperCase()) {
            value = param[i].split('=')[1];
            break;
        }
    }
    return value ;
}

function loginCheck() {
    $.ajax({
        url: COMMONWEBSERVER + "/customer/loginCheck",
        method: "POST",
        dataType: "json",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        success: function (JSONData, status) {
            //개발
            //if(JSONData.customer == null){
            //	location.replace("./login.html");
            //}
            LOGIN_NO = JSONData.customer.customerNo;
            LOGIN_ID = JSONData.customer.customerTel;
            LOGIN_PW = JSONData.customer.password;

            //                customerNum.TEXT(""+LOGIN_ID);
        },
        error: function (JSONData, status) {
            console.log(LOGIN_ID);
            console.log(LOGIN_PW);
        }
    });
}


/*json 날짜 변환하이
작성자: 송은영, 서형섭 
*/

function GetDateString(jsonDate) {
    var year, month, day, hour, minute, second , returnValue  , date ,replaceStr

    replaceStr = jsonDate.replace(/\D/g, "");
    date = new Date(parseInt(replaceStr));

    year = date.getFullYear();
    month = Pad(date.getMonth()+1);
    day = Pad(date.getDate());
    hour = Pad(date.getHours());
    minute = Pad(date.getMinutes());
  

//     returnValue = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    returnValue = year + "-" + month + "-" + day;
    return returnValue;
}

function Pad(num) {
    num = "0" + num;
    return num.slice(-2);
}
