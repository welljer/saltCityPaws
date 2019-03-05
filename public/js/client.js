var map;
var markers = [];
var infoWindow;
var locationSelect;

function initMap() {
    var SLC = { lat: 40.7608, lng: -111.8910 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: SLC,
        zoom: 11,
        mapTypeId: 'roadmap',
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU }
    });
    var marker = new google.maps.Marker({ position: SLC, map: map });
    infoWindow = new google.maps.InfoWindow();

    searchButton = document.getElementById("searchButton").onclick = searchLocations;

    locationSelect = document.getElementById("locationSelect");
    locationSelect.onchange = function () {
        var markerNum = locationSelect.options[locationSelect.selectedIndex].value;
        if (markerNum != "none") {
            google.maps.event.trigger(markers[markerNum], 'click');
        }
    };
}

function searchLocations() {
    var address = document.getElementById("addressInput").value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            searchLocationsNear(results[0].geometry.location);
            var marker = new google.maps.Marker({ position: results[0].geometry.location, map: map });
        } else {
            alert(address + ' not found');
        }
    });
}

function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;

    locationSelect.innerHTML = "";
    var option = document.createElement("option");
    option.value = "none";
    option.innerHTML = "See all results:";
    locationSelect.appendChild(option);
}

function searchLocationsNear(center) {
    clearLocations();

    var radius = document.getElementById('radiusSelect').value;
    var searchUrl = 'storelocator.php?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
    downloadUrl(searchUrl, function (data) {
        var xml = parseXml(data);
        var markerNodes = xml.documentElement.getElementsByTagName("marker");
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markerNodes.length; i++) {
            var id = markerNodes[i].getAttribute("id");
            var name = markerNodes[i].getAttribute("name");
            var address = markerNodes[i].getAttribute("address");
            var distance = parseFloat(markerNodes[i].getAttribute("distance"));
            var latlng = new google.maps.LatLng(
                parseFloat(markerNodes[i].getAttribute("lat")),
                parseFloat(markerNodes[i].getAttribute("lng")));

            createOption(name, distance, i);
            createMarker(latlng, name, address);
            bounds.extend(latlng);
        }
        if (markerNodes.length == 0) {
            map.setCenter(center);
            map.setZoom(11);
        } else {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < markerNodes.length; i++) {
                map.fitBounds(bounds);
                locationSelect.style.visibility = "visible";
                locationSelect.onchange = function () {
                    var markerNum = locationSelect.options[locationSelect.selectedIndex].value;
                    google.maps.event.trigger(markers[markerNum], 'click');
                };
            };
        };
    });
}

function createMarker(latlng, name, address) {
    var html = "<b>" + name + "</b> <br/>" + address;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}

function createOption(name, distance, num) {
    var option = document.createElement("option");
    option.value = num;
    option.innerHTML = name;
    locationSelect.appendChild(option);
}

function downloadUrl(url, callback) {
    var request = window.ActiveXObject ?
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest;

    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
        }
    };

    request.open('GET', url, true);
    request.send(null);
}

function parseXml(str) {
    if (window.ActiveXObject) {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.loadXML(str);
        return doc;
    } else if (window.DOMParser) {
        return (new DOMParser).parseFromString(str, 'text/xml');
    }
}

function doNothing() { }