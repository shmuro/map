var map;
var mgr;

function initialize() {
	var myOptions = {
		zoom : 10,
		center : new google.maps.LatLng(49.854808, 24.030426),
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map($('#map_canvas')[0], myOptions);
	mgr = new MarkerManager(map, myOptions);
	var marker = new google.maps.Marker({
		position : new google.maps.LatLng(49.854808, 24.030426),
		animation : google.maps.Animation.DROP,
		title : "Random marker #"
	});

	google.maps.event.addListener(mgr, 'loaded', function() {
		mgr.addMarker(marker, 0);
		mgr.refresh();
	});

	google.maps.event.addDomListener($('#click')[0], 'click', function() {
		mgr.clearMarkers()
	});

	google.maps.event.addDomListener(window, 'load', initialize);
}
$(document).ready(function() {
	initialize();
});