$('#map').height(WINDOW_HEIGHT - 120);

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    onSlideChangeStart: function (swiper) {
        console.log('swipper onSlideChangeStart');
    },
    onSlideChangeEnd: function (swiper) {
        console.log('swipper onSlideChangeEnd');
        !!selectedMarker && selectedMarker.setImage(markerImage);
        markerSetArry[swiper.activeIndex].marker.setImage(clickedMarkerImage);
        selectedMarker = markerSetArry[swiper.activeIndex].marker;
        map.panTo(markerSetArry[swiper.activeIndex].marker.getPosition());
    },
    onTap: function (swiper) {
        console.log('swipper onTap');
        var storeId = $('.swiper-slide-active .content .content_text').attr("id");
        console.log(storeId);
        $.mobile.changePage("storeHome.html", {
            dataUrl: "storeHome.html?parameter=" + storeId,
            data: {
                'parameter': storeId
            },
            transition: "slideup"
        });
    }
});
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
var defaultPosition = new daum.maps.LatLng(37.49579649348827, 127.02753373032039);

var mapTypeControl = new daum.maps.MapTypeControl();
//주소-좌표간 변환 서비스 객체를 생성한다.
var geocoder = new daum.maps.services.Geocoder();

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new daum.maps.LatLng(defaultPosition.getLat(), defaultPosition.getLng()), // 지도의 중심좌표
        level: 6 // 지도의 확대 레벨
    };
//맵 저장 변수
//var map;
var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
$('#getMyLocation').on('click', function () {
    console.log();
    MYLOCATION.set();
    //    MYLOCATION.marking(map);
});

$(document).one("pageshow", "#map-page", function () {

    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
    map.relayout();
    map.setCenter(defaultPosition);

    //내 위치 확인하기
    $('#storeSearchIpt').on('change', function () {

    });
    if (MYLOCATION.get() != null)
        MYLOCATION.marking(map);

    //     setEvent(map);
});
/* 지도생성 끝 */


var selectedMarker = null;
var selectedMarkerBuffer = null;
//마커의 이미지,크기,옵션
var markerImage = new daum.maps.MarkerImage(
    '../image/brandImg/logoMarker.png',
    new daum.maps.Size(50, 50), {
        offset: new daum.maps.Point(25, 50),
        alt: '마커이미지'
    }
);
var clickedMarkerImage = new daum.maps.MarkerImage(
    '../image/brandImg/clickedMarker.png',
    new daum.maps.Size(50, 50), {
        offset: new daum.maps.Point(25, 50),
        alt: '클릭된마커이미지'
    }
);
//지도에 표시될 마커 객체를 가진 배열
var markers = [];
//지도에 표시될 오버레이 객체를 가진 ㅐ배열
var overlays = [];
var markerSetArry = new Array();
var markerSet = new Object();

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//내 위치 확인
$('#myLocationBtn').on('click', function () {
    MYLOCATION.set()
})

//지역기반검색
function getStores() {
    console.log($('#storeSearchIpt').val());
    stores.set($('#storeSearchIpt').val());
    removeAllMarkers(markerSetArry);
    markerSetArry = [];
    map.setLevel(4)
    swiper.removeAllSlides();
    $.mobile.loading('show');
    setTimeout(function () {
        /*
         * 지도 표시방법 변경 리스트 제거
         * 
         * 민호
         * 05.19.16
         */
        var data = stores.get();
        //        var html = template(data);
        //        생성된 HTML을 DOM에 주입
        //        $('#store-table').empty();
        //        $('#store-table').append(html);
        console.log(data);
        //    마커 표시
        _markerMaker.set(stores);
        _markerMaker.addMarker();
        $.mobile.loading('hide');
        //첫번째 마커로 이동
        map.setCenter(markerSetArry[0].marker.getPosition());
    }, 1000 * 1.5);
}

//function markerController(type) {
//    if (type === 'myLocation') {
//
//    }
//}

function markerMaker() {
    //내부변수 size
    var size;
    //내부변수 stores
    var stores;

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
//                if(i === 0){
//                    selectedMarker = marker;
//                    marker.setImage(clickedMarkerImage);
//                }
                marker.normalImage = markerImage;
                
                var content =
                    '<div class="wrap">' +
                    '    <div class="info">' +
                    '        <div class="title">' +
                    '            ' + store.storeName +
                    '            <div class="close" title="닫기"></div>' +
                    '        </div>' +
                    '        <div class="body">' +
                    '            <div class="img">' +
                    '                <img src="' + COMMONWEBSERVER + "/image/storeImg/" + store.storeImg + '.jpg" >' +
                    '           </div>' +
                    '            <div class="desc">' +
                    '                <div><a id=' + store.storeNo + '>상점으로</a></div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>';
                tmpNo = store.storeNo;
                if(tmpNo > 2006){
                    tmpNo = TESTSTORENO;    
                }
                
                swiper.appendSlide(
                    '<div class="swiper-slide">' +
                    '<div class="content">' +
                    '   <div id = '+ tmpNo +' class="content_text">' +
                    '       <div class="item_name">' + store.storeName + '</div>' +
                    '          <div class="item_addr">' + store.storeAddr + '</div> ' +
                    '          <div class="item_phone">' + store.storeTel +'</div>' +
                    '          <div class="item_time">' + store.storeTime + '</div>' +
                    '   </div>' +
                    '</div>' +
                    '</div>');
                   TESTSTORENO++;
                if (TESTSTORENO > 2005) {
                    TESTSTORENO = 2001;
                }


                var overlay = new daum.maps.CustomOverlay({
                    content: content,
                    map: null,
                    position: marker.getPosition()
                });

                markerSet = {
                    marker: marker,
                    overlay: overlay
                };

                markerSetArry.push(markerSet);

                // 마커에 click 이벤트를 등록합니다
                (function (markerSet, store, i) {
                    daum.maps.event.addListener(markerSet.marker, 'click', function () {
                        if (!selectedMarker || selectedMarker != markerSet.marker) {
                            swiper.slideTo(i);
                            
                            map.panTo(markerSetArry[i].marker.getPosition());

                            // 클릭된 마커 객체가 null이 아니면
                            // 클릭된 마커의 이미지를 기본 이미지로 변경하고
                            !!selectedMarker && selectedMarker.setImage(markerImage);

                            // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
                            markerSet.marker.setImage(clickedMarkerImage);

                            //                            오버레이 해제 중 05.19.16 민호
//                            markerSet.overlay.setMap(map);
                            //                            console.log('나올거야')
                            //개선해야하는 코드 -_-
//                            if (selectedMarker != null) {
                            //    console.log('오긴와');
//                                closeOverlay();
//                                markerSet.overlay.setMap(null);
//                            }
                        }
                        //                        console.log('그냥그냥');
                        selectedMarker = markerSet.marker;
                    });
                })(markerSet, store, i);
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
//makeOverlay 클로저
function makeOverlay(map, marker, store) {
    return function () {
        var content =
            '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            ' + store.storeName +
            '            <div class="close" title="닫기"></div>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="' + COMMONWEBSERVER + "/image/storeImg/" + store.storeImg + '.jpg" >' +
            '           </div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">' + store.storeAddr +
            '                <div><a id=' + store.storeNo + '>상점으로</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        var overlay = new daum.maps.CustomOverlay({
            content: content,
            map: null,
            position: marker.getPosition()
        });
    }
}
//마커 지우기
function removeAllMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].marker.setMap(null);
    }
}


//오버레이 닫기
function closeOverlay() {
    console.log('closeOverlay()');
    for (var i = 0; i < markerSetArry.length; i++) {
        if (markerSetArry[i].marker == selectedMarker) {
            markerSetArry[i].overlay.setMap(null);
        }
    }
}
//닫기 버튼
$("#map-page").on("click", '.close', function () {
    closeOverlay();
    selectedMarker = null;
});

function setEvent(map) {
    daum.maps.event.addListener(map, 'click', function (mouseEvent) {
        closeOverlay();
        selectedMarker = null;
    });
}