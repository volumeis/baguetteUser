/* 지도생성 시작 */
//검색을 위한 검색어 저장 클로저
console.log('asdasd');
var stores = storesCloser();
//핸들바 템플릿 가져오기
var source = $("#store-list-template").html();
//핸들바 템플릿 컴파일
var template = Handlebars.compile(source);

//내 현재위치 : 강남역
var myPosition = new daum.maps.LatLng(37.497916606749946, 127.02753373032039);
var mapTypeControl = new daum.maps.MapTypeControl();
//주소-좌표간 변환 서비스 객체를 생성한다.
var geocoder = new daum.maps.services.Geocoder();

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new daum.maps.LatLng(myPosition.getLat(), myPosition.getLng()), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map;
$(document).one("pageshow", "#map-page", function () {
    map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // 지도 타입 컨트롤을 지도에 표시합니다
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
    // 현재위치한 곳에 마커를 표시합니다.
    new daum.maps.Marker({
        position: myPosition
    }).setMap(map);
});
/* 지도생성 끝 */
 $(document).one('pageshow', '#map-page', function () {
            $('#search').on('change', function () {
                stores.set($('#search').val());
                console.log($('#search').val())
            })
        });

//지도에 표시될 마커 객체를 가진 배열
var markers = [];


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

function getStores() {
    var data = stores.get();
    var html = template(data);
    //생성된 HTML을 DOM에 주입
    $('#store-table').html("");
    $('#store-table').append(html);
    console.log(data);
    //마커 표시
    showMarkers();
}


function getInfo() {
    // 지도의 현재 중심좌표를 얻어옵니다 
    var center = map.getCenter();
    // 지도의 현재 레벨을 얻어옵니다
    var level = map.getLevel();
    // 지도타입을 얻어옵니다
    var mapTypeId = map.getMapTypeId();
    // 지도의 현재 영역을 얻어옵니다 
    var bounds = map.getBounds();
    // 영역의 남서쪽 좌표를 얻어옵니다 
    var swLatLng = bounds.getSouthWest();
    // 영역의 북동쪽 좌표를 얻어옵니다 
    var neLatLng = bounds.getNorthEast();
    // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
    var boundsStr = bounds.toString();
    var message = '지도 중심좌표는 위도 ' + center.getLat() + ', <br>';
    message += '경도 ' + center.getLng() + ' 이고 <br>';
    message += '지도 레벨은 ' + level + ' 입니다 <br> <br>';
    message += '지도 타입은 ' + mapTypeId + ' 이고 <br> ';
    message += '지도의 남서쪽 좌표는 ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' 이고 <br>';
    message += '북동쪽 좌표는 ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' 입니다';
    /*
    지도 중심좌표는 위도 37.497657577297666, 
    경도 127.02749122793449 이고 
    지도 레벨은 4 입니다 
    지도 타입은 1 이고 
    지도의 남서쪽 좌표는 37.49450577013192, 127.01871496109466 이고 
    북동쪽 좌표는 37.50080873044205, 127.0362682321078 입니다
    */
    var infoDiv = document.getElementById('infoDiv');
    infoDiv.innerHTML = message;
//    showMarkers();
}



// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarker(position) {
    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        position: position
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
//function setMarkers(map) {
//    for (var i = 0; i < markers.length; i++) {
//        markers[i].setMap(map);
//    }
//}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
//function showMarkers() {
//    setMarkers(map)
//}

//마커들 로드
function showMarkers() {
    for (var i = 0; i < 50; i++) {
        console.log(stores.get().list[i].storeAddr);
        geocoder.addr2coord({
            addr: stores.get().list[i].storeAddr,
            callback: coordCallback
        });
    }
}

function coordCallback(status, result) {
    if (status === daum.maps.services.Status.OK) {
        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new daum.maps.Marker({
            map: map,
            position: coords
        });
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new daum.maps.InfoWindow({
            content: '<div style="padding:5px;">우리회사</div>'
        });
        //         infowindow.open(map, marker);
    }
}