<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false&key=AIzaSyAW42eckhtmysu0PMPYY_zv3EP2jw_Ps5w"></script>
    <script type="text/javascript" src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markermanager/src/markermanager.js"></script>
    <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    <script src="/js/map.js" type="text/javascript"></script>
<title>Google map</title>
</head>
<body>
	<h1>${message}</h1>
    <div id="map_canvas" style="height: 400px;"></div>
    <button type="button" id="click">Click Me!</button>
</body>
</html>