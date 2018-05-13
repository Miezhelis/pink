function initMap() {

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {lat:59.938637, lng:  30.323067}
  });

  var marker = new google.maps.Marker({
    position: {lat: 59.938556, lng: 30.322941},
    map: map,

    icon: "img/icon-map-marker.svg"
  });

}

google.maps.event.addDomListener(window, "load", initMap);


var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
