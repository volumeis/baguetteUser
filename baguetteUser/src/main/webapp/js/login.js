$(function () {

    //==> DOM Object GET 3가지 방법 ==> 1. $(tagName) : 2.(#id) : 3.$(.className)
    $("#customerTel").focus();
    //==>"Login"  Event 연결
    $("#login").on("click", function () {

        console.log("1zz");
        var id = $("input:text").val().trim();
        var pw = $("input:password").val().trim();

        if (id == null || id.length < 1) {
            alert('ID 를 입력하지 않으셨습니다.');
            $("input:text").focus();
            return;
        }

        if (pw == null || pw.length < 1) {
            alert('패스워드를 입력하지 않으셨습니다.');
            $("input:password").focus();
            return;
        }


        $.ajax({
            url: COMMONWEBSERVER + "/customer/jsonLogin",
//            url: "/customer/jsonLogin",
            method: "POST",
            dataType: "json",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                customerTel: id,
                password: pw
            }),
            success: function (JSONData, status) {

                if (JSONData.customer != null) {

                    location.href = "./main.html";
                    return;

                } else {
                    alert("아이디 , 패스워드를 확인하시고 다시 로그인...");
                }
            }
        });
    });
});