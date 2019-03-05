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
    var searchUrl = 'walkerlocator2.php?lat=' + center.lat() + '&lng=' + center.lng() + '&radius=' + radius;
    downloadUrl(searchUrl, function (data) {
        var xml = parseXml(data);
        var markerNodes = xml.documentElement.getElementsByTagName("marker");
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markerNodes.length; i++) {
            var id = markerNodes[i].getAttribute("id");
            var name = markerNodes[i].getAttribute("human_name");
            var address = markerNodes[i].getAttribute("human_address");
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

    //hard coded the radius to 10 miles, if you get the value from a field if required
    var parameters = 'lat='+ location.lat() + '&lng=' + location.lng() + '&radius=10';
 
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: "walkerlocator.php",
        data: parameters,
        success: function(msg) {
            //alert(msg);
            displayStores(msg);
        },
        error:function (xhr, ajaxOptions, thrownError){
            alert(thrownError);
        }
    });  /* $.ajax  */
}
