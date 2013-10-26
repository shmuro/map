<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
html {
	height: 100%
}

body {
	height: 100%;
	margin: 0;
	padding: 0
}

#map_canvas {
	border: 1px black solid;
	height: 80%;
	margin: 10px;
	box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.7);
}

.row {
	display: inline-block;
}
</style>
<script type="text/javascript"
	src="https://maps.googleapis.com/maps/api/js?v=3&language=uk&sensor=false&key=AIzaSyAW42eckhtmysu0PMPYY_zv3EP2jw_Ps5w"></script>
<!--  <script type="text/javascript" src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markermanager/src/markermanager.js"></script>-->
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script src="/js/map.js" type="text/javascript"></script>
<script src="/js/markermanager.js" type="text/javascript"></script>
<script src="/js/smartinfowindow.js" type="text/javascript"></script>
<title>Google map</title>
</head>
<body>
	<%-- <h1>${message}</h1> --%>
	<div class="row">
		<button type="button" id="cleanAll" class>Clean</button>
		<button type="button" id="addMarker">addMarker</button>
		<button type="button" id="center">Center</button>
		zoom&nbsp;-&nbsp;
		<div id="zoom"></div>
	</div>
	<div id="map_canvas"></div>
</body>
</html>