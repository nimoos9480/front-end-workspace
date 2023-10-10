import { useEffect, useRef } from "react";

const KakaoMap = () => {
  // var container = document.getElementById("map");
  // 대신 useRef로 참조
  const mapRef = useRef(null);

  var options = {
    // kakao에 접근이 안되기 때문에 window. 붙여주기
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심좌표
    level: 3, // 지도의 레벨 (확대, 축소)
  };

  // 시작하자마자 호출필요
  useEffect(() => {
    var map = new window.kakao.maps.Map(mapRef.current, options);
  }, []);

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>
  );
};
export default KakaoMap;
