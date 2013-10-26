var map;
var mgr;
var geocoder;
function createMarker(title) {

	var latLngPosn = new google.maps.LatLng(map.getCenter().lat(), map
			.getCenter().lng());

	var iconImage = new google.maps.MarkerImage(
			'http://chart.apis.google.com/chart?cht=mm&chs=32x32&chco=FFFF00FF,FFFF00FF,000000FF&ext=.png',
			new google.maps.Size(24, 14), new google.maps.Point(0, 0),
			new google.maps.Point(0, 32));

	var iconShadow = new google.maps.MarkerImage(
			'http://chart.apis.google.com/chart?cht=mm&chs=32x32&chco=FF0000FF,FF0000FF,000000FF&ext=.png',
			new google.maps.Size(40, 30), new google.maps.Point(0, 0),
			new google.maps.Point(0, 32));

	var iconShape = {
		coord : [ 1, 1, 1, 32, 32, 32, 32, 1 ],
		type : 'poly'
	};

	var markerOptions = {
		position : latLngPosn,
		title : title,
		shadow : iconImage,
		icon : iconShadow,
		animation : google.maps.Animation.DROP, /* google.maps.Animation.BOUNCE, */
		shape : iconShape
	};

	var marker = new google.maps.Marker(markerOptions);

	google.maps.event.addListener(marker, 'dblclick', function() {
		mgr.removeMarker(marker)
	});

	google.maps.event.addListener(marker, 'click', function(e) {
		geocodePosition(marker.getPosition());
	});
	return marker;
}

function initialize() {

	geocoder = new google.maps.Geocoder();

	var latLng = new google.maps.LatLng(49.854808, 24.030426);

	var myOptions = {
		zoom : 10,
		center : latLng,
		maxZoom : 20,
		minZoom : 1,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map($('#map_canvas')[0], myOptions);
	mgr = new MarkerManager(map, myOptions);

	// google.maps.event.addListener(mgr, 'loaded', function() {
	// mgr.addMarker(marker, 0);
	// mgr.refresh();
	// });

	google.maps.event.addListener(map, 'zoom_changed', function() {
		$('#zoom').html(map.getZoom());
	});

	google.maps.event.addDomListener($('#center')[0], 'click', function() {
		map.panTo(latLng);
	});

	google.maps.event.addDomListener($('#cleanAll')[0], 'click', function() {
		mgr.clearMarkers()
	});

	google.maps.event.addDomListener($('#addMarker')[0], 'click', function() {
		var marker = createMarker("center");
		mgr.addMarker(createMarker("center"), map.getZoom());
		mgr.refresh();
	});
}

function geocodePosition(pos) {
	var content = '';
	geocoder.geocode({
		latLng : pos
	}, function(responses) {
		if (responses && responses.length > 0) {
			for ( var i in responses) {
				if (responses.hasOwnProperty(i)) {
					content += responses[i].formatted_address + '</br> ';
				}
			}
		} else {
			content = 'Cannot determine address at this location.';
		}

		var infobox = new SmartInfoWindow({
			position : pos,
			map : map,
			content : '<div style="text-align: center; font-size:14px;">'
					+ content + '</div>'
		});
	});
}

// <script type="text/javascript">google.load("jquery", "1");</script>
// <script src="http://www.google.com/jsapi"></script>
// function loadMap(langCode) {
// google.load('maps', '3.7', {
// 'other_params' :
// 'sensor=false&libraries=places&language=' + langCode,
// 'callback' : mapsLoaded
// });
// }

$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', initialize);
});