function myMap() {
  var myProp = {
      center: new google.maps.LatLng(25.663801,-100.374796),
      zoom:16,
  };
  var map = new google.maps.Map(document.getElementById("googleMaps"),myProp);
}

myMap();