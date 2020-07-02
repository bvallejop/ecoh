function myMap() {
  var myProp = {
      center: new google.maps.LatLng(25.657563,-100.365558),
      zoom: 16,
  };
  var map = new google.maps.Map(document.getElementById("googleMaps"), myProp);
}

myMap();