//
google.maps.event.addDomListener(window, 'load', init);
function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(52.509814, 19.760466), // Plock

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#101010"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e6e5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#6a7fab"
          },
          {
            "lightness": 17
          }
        ]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map 
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var info_window_content =
    '<div style="height:100px">' +
    '<img src="images/gmap-logo.png" />' +
    '</div>'
  var info_window = new google.maps.InfoWindow({ content: info_window_content });

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(52.509814, 19.760466),
    map: map,
    title: 'Salon pielęgnacji psów "Clarus"'
  });

  google.maps.event.addListener(marker, 'click', function (event) {
    info_window.setPosition(marker.getPosition());
    info_window.open(map);
  });

  google.maps.event.addListenerOnce(map, 'idle', function () {
    google.maps.event.trigger(map, 'resize');
  });
}



$(function () {
    $(".clrs-facebook").one("mouseover", function () {
        $(this).addClass("clrs-noAnimation");
    })
})




$(function () {
    $("#mobileBurger").click(function () {
       $("#mobileMenu").toggleClass("is-active", 400);
    })
})


$(window).on('load', function (e) {
    setTimeout(function () {
        $(".clrs-loadingLayer").fadeOut(400);
        $(".clrs-mainContainer").fadeIn(1400, function() {
        init();
    });
    }, 1500); 
})
