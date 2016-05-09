//test closer
var _markerMaker = markerMaker();

/* 지도생성 시작 */
//검색을 위한 검색어 저장 클로저
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


var selectedMarker = null;
//마커의 이미지,크기,옵션
var markerImage = new daum.maps.MarkerImage(
    '../image/breadMarker.png',
    new daum.maps.Size(50, 50), {
        offset: new daum.maps.Point(25, 50),
        alt: '마커이미지'
    }
);
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


    _markerMaker.set(stores);
    //    _markerMaker.addrToCoordStores();
    _markerMaker.addMarker();
    _markerMaker.setMap();
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

function markerMaker() {
    //내부변수 size
    var size;
    //내부변수 stores
    var stores;
    //position 배열
    var positions = [];
    //지도에 표시될 마커 객체를 가진 배열
    var markers = [];

    return {
        set: function (_stores) {
            size = _stores.get().size;
            stores = _stores.get().list;
        },
        addMarker: function () {
            // 마커를 생성합니다
            for (var i = 0; i < size; i++) {
                var store = stores[i];
                var marker = new daum.maps.Marker({
                    position: new daum.maps.LatLng(store.storeLat, store.storeLng),
                    map: map,
                    image: markerImage
                });
                // 마커에 click 이벤트를 등록합니다
                daum.maps.event.addListener(marker, 'click', makeClickListener(map, marker, store));
                //markers.push(marker);
            }
        },
        setMap: function () {
            console.log('나실행되따')
            console.log(markers)
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
        }
    }
}
//클릭이벤트 클로저
function makeClickListener(map, marker, store) {
    return function () {
        var content =
            '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            ' + store.storeName +
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="' + COMMONWEBSERVER + "/image/storeImg/" + store.storeImg + '.jpg" >' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">' + store.storeAddr + 
            '                <div><a id='+store.storeNo+'>상점으로</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        var overlay = new daum.maps.CustomOverlay({
            content: content,
            map: map,
            position: marker.getPosition()
        });
    };
}
//닫기버튼 클로저
function makeCloseListener(map, marker, overlay) {
    return function () {

    };
}
//
//
////마커들 로드
//function showMarkers() {
//    for (var i = 0; i < stores.get().size; i++) {
//        console.log(stores.get().list[i].storeAddr);
//
//        var store = stores.get().list[i];
//
//        geocoder.addr2coord({
//            addr: store.storeAddr,
//            callback: coordCallback
//        });
//
//
//        function coordCallback(status, result) {
//            if (status === daum.maps.services.Status.OK) {
//                var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
//                var marker = new daum.maps.Marker({
//                    map: map,
//                    position: coords,
//                    image: markerImage
//                });
//
//                // 마커에 click 이벤트를 등록합니다
//                daum.maps.event.addListener(marker, 'click', function () {
//                    if (!selectedMarker || selectedMarker !== marker) {}
//                    console.log('addListener ' + i);
//                    var overlay = new daum.maps.CustomOverlay({
//                        content: makeCustomOverlay(stores.get().list[i]),
//                        map: map,
//                        position: marker.getPosition()
//                    });
//                });
//            }
//
//        }
//
//        function closeOverlay() {
//            overlay.setMap(null);
//        }
//    }
//}
//
//function makeCustomOverlay(store) {
//    var contentOverlay =
//        '<div class="wrap">' +
//        '    <div class="info">' +
//        '        <div class="title">' +
//        '            ' + store.storeName +
//        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
//        '        </div>' +
//        '        <div class="body">' +
//        '            <div class="img">' +
//        '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
//        '           </div>' +
//        '            <div class="desc">' +
//        '                <div class="ellipsis">' + store.storeAddr +
//        '                <div><a href="http://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
//        '            </div>' +
//        '        </div>' +
//        '    </div>' +
//        '</div>';
//    return contentOverlay;
//}