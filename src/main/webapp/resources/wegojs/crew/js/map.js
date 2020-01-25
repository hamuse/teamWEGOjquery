"use strict"
var map = map || {}
map = (() => {
    const WHEN_ERR = '찾는 mapjs를 호출할수 없습니다.'
    let context, js;
    let init = () => {
        context = $.ctx()
        js = $.js()
    }
    let onCreate = () => {
        init()
        mapfun()
        mapsDBinsert()
    }
    let mapfun = () => {
        let mapContainer = document.getElementById('map'),
            mapOption = {
                center: new kakao.maps.LatLng(37.5048086, 127.050147), 
                level: 3 
            };
        let map = new kakao.maps.Map(mapContainer, mapOption); 
        let markerPosition = new kakao.maps.LatLng(37.5048086, 127.050147);
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }
    let mapsDBinsert = () => {
        $('#mapdb').click(e => {
            e.preventDefault
            $.getJSON(context + '/maps/map/create/', d => {
              
                $.getJSON(context + '/maps/insert/mapDB', d => {
                 
                })
            })

        })
    }
    return { onCreate }

})();