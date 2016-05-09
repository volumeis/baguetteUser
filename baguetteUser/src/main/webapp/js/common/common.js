/**
 * 프론트엔드_공통기능
 */

//민호 pc tomcat 서버
var COMMONWEBSERVER = "http://java78bit404.iptime.org:8025";
//var COMMONWEBSERVER = "";

//민호 pc database 서버
var COMMONDBSERVER = "http://java78bit404.iptime.org:3025";
//var COMMONDBSERVER = "";

//depreciate
//var COMMONDBSERVER = "http://java78bit404.iptime.org:5025";

//민호 pc node.js 서버
var COMMONNODESERVER = "http://java78bit404.iptime.org:30025";
//var COMMONNODESERVER = "http://localhost:3000";

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
    var param = (address.slice(address.indexOf('?') + 1, address.length)).split('&');
    for (var i = 0; i < param.length; i++) {
        var name = param[i].split('=')[0];
        if (name.toUpperCase() == qs.toUpperCase()) {
            value = param[i].split('=')[1];
            break;
        }
    }
    return value;
}

/**
 * 세션체크 이벤
 * 
 * 민호
 * 04.26.16
 */
$(document).on('loadCustomerInfo', function () {
    $.ajax({
        url: COMMONWEBSERVER + "/customer/loginCheck",
        method: "POST",
        dataType: "json",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        success: function (JSONData, status) {
            LOGIN_NO = JSONData.customer.customerNo;
            LOGIN_ID = JSONData.customer.customerTel;
            LOGIN_PW = JSONData.customer.password;
        },
        error: function (JSONData, status) {
            console.log(LOGIN_ID);
            console.log(LOGIN_PW);
        }
    });

    $("#customerID").text(LOGIN_ID)
//    $('#main-page').remove()
});
$(document).on('pageshow', function (e, data) {
    console.log('컨트롤에 계정정보 확인 함');
//    $('#content').height(getRealContentHeight());
    $(document).trigger('loadCustomerInfo');
});



/**
*   json 날짜 변환하이
*   작성자: 송은영, 서형섭 
*/
function GetDateString(jsonDate) {
    var year, month, day, hour, minute, second, returnValue, date, replaceStr

    replaceStr = jsonDate.replace(/\D/g, "");
    date = new Date(parseInt(replaceStr));

    year = date.getFullYear();
    month = Pad(date.getMonth() + 1);
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

/**
 * 페이지 높이 조정
 *
 * 민호
 * 04.01.16
 */

//function getRealContentHeight() {
//    var header = $.mobile.activePage.find("div[data-role='header']:visible");
//    var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
//    var content = $.mobile.activePage.find("div[data-role='main']:visible:visible");
//    var viewport_height = $(window).height();
//
//    var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
//    if ((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
//        content_height -= (content.outerHeight() - content.height());
//    }
//    return content_height;
//}