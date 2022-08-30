
function makeStationIcons(json) {
    let stations = JSON.parse(json);
    let stationFound = false;
    for (var i = 0; i < stations.length; i++) {
        stationFound = false;
        // Set major stations to large icon and others to small
        // Simple but inefficient solution is to iterate through both
        for (let j = 0; j < majorStations.length && !stationFound; j++) {
            if (stations[i].stop_code == majorStations[j]) {
                var majorMarker = new L.Marker([stations[i].stop_lat, stations[i].stop_lon], {icon: stationIcon});
                majorMarker.addTo(map).bindPopup(stations[i].stop_name);
                console.log ("Major marker added");
                stationFound = true;
            }
        }
        if (!stationFound) {
            var marker = new L.Marker([stations[i].stop_lat, stations[i].stop_lon], {icon: locationIcon});
            marker.addTo(map).bindPopup(stations[i].stop_name);
            console.log("Marker added");
        }
    }
}

function getStationData (stop) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log (this.getAllResponseHeaders());
            console.log (this.responseText);
            return(this.responseText);
        }
    };
    let getURL = window.location.href + "all/" + stop.toString();
    // First Call
    xhttp.open("GET", getURL, true);
    xhttp.send();

}

function makeTrains(json) {
    let trains = JSON.parse(json);
    Object.keys(trains).forEach(key => {
        let value = trains[key];
        console.log(key, value);

        // If arrived == true then put train at destination or vise versa at start

        // if (trains[key].departed != true) {
        //     // Get train station location
        //     // Put train at station
        // }

        console.log(trains[key].lat + " - " + trains[key].lng);
        if (typeof(trains[key].lat) != "undefined") {
            var marker = new L.Marker([trains[key].lat, trains[key].lng], {icon: trainIcon});
            var string = trains[key].from + " - " + trains[key].to + " (Speed : " + trains[key].speed + ")";
            marker.addTo(map).bindPopup(string);
            console.log("Train added");
            setTimeout(function () {
                marker.remove();
            }, 10000);
        } else if (trains[key].departed !== true) {
            var stationData = getStationData(trains[key].times[0].code);
            var markerDep = new L.Marker([stationData.stop_lat, stationData.stop_lon], {icon: trainIcon});
            var stringDep = trains[key].from + " - " + trains[key].to + " (Status : Not Departed)";
            markerDep.addTo(map).bindPopup(stringDep);
            console.log("Train added (Not Departed)");
            setTimeout(function () {
                markerDep.remove();
            }, 10000);
        } else {
            // This code is not working since the station data is not being accessed using an accurate key
            // TO FIX 2022-08-30
            var arrayLength = trains[key].times.length - 1;
            var stationData2 = getStationData(trains[key].times[arrayLength].code);
            console.log (stationData2)
            var markerArr = new L.Marker([stationData2.stop_lat, stationData2.stop_lon], {icon: trainIcon});
            var stringArr = trains[key].from + " - " + trains[key].to + " (Status : Arrived)";
            markerArr.addTo(map).bindPopup(stringArr);
            console.log("Train added (Arrived)");
            setTimeout(function () {
                markerArr.remove();
            }, 10000);
        }
    });
    // for (const key in trains){
    //     console.log(trains[key]);
    // }
    // Object.keys(trains).foreach((key => {
    //     console.log(trains[key]);
    // }))

}

/*
Sample JSON station data to model

stop_id,stop_code,stop_name,location_type,stop_lon,stop_lat,stop_timezone,parent_station,wheelchair_boarding
199,BENN,Benny,0,-81.630163,46.781815,America/Toronto,,

 */

let majorStations = [
    "OTTW",
    "TRTO",
    "MTRL",
    "HLFX",
    "SUDJ",
    "WNPG",
    "JONB",
    "SENN",
    "SARN",
    "WDON",
    "CHUR",
    "JASP",
    "PRUP",
    "PGEO",
    "VCVR",
    "WHTR",
    "COCH",
    "MSNE"
]

// Build Map

var map = L.map('map').setView([43.6437947,-79.3835378], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var trainIcon = L.icon({
    iconUrl: '../IMG/stationMarker.png',

    iconSize:     [30, 30], // size of the icon
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

var locationIcon = L.icon({
    iconUrl: '../IMG/vectorMarker.png',

    iconSize:     [8, 8], // size of the icon
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

var stationIcon = L.icon({
    iconUrl: '../IMG/trainStation.png',

    iconSize:     [30, 30], // size of the icon
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

// Read all station data

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log (this.getAllResponseHeaders());
        //console.log (this.responseText);
        makeStationIcons(this.responseText);
    }
};
let getURL = window.location.href + "all"
xhttp.open("GET", getURL, true);
xhttp.send();

// Draw route on map

window.onload = function() {
    let getRoutesURL = window.location.href + "routes"
    var geojson = new L.GeoJSON.AJAX(getRoutesURL);
    geojson.addTo(map);
    //console.log("GEOJSON added")
}

// Read current train data

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log (this.getAllResponseHeaders());
        makeTrains (this.responseText);
    }
};

let getURL2 = window.location.href + "live";
// First Call
xhttp2.open("GET", getURL2, true);
xhttp2.send();
// Constant Updates
const intervalID = setInterval(() => {
    xhttp2.open("GET", getURL2, true);
    xhttp2.send();
}, 10000);

/*

    For the number of stations
        Have one array with all data
            Each array element will be an array
                Each of these will contain numbered fields
                A map dot will be created for each coordinate pair
                A map label will be attributed to each one

 */

/*

    Backend solutions :
        Create Database with information from VIA/ON
        Have java backend query db
        Have a js onload call to the api endpoint for stations
        Format the response as an array
        Loop over the array
        Create stations objects (include data for station)
        Use API calls for live data from VIA
        Take the data returned from these API calls and create an icon to represent the location of a train

    Make ajax calls from front end to : https://tsimobile.viarail.ca/data/allData.json
        Use first line properties to read location of the train : 2 (08-22)":{"lat":50.2394,"lng":-90.0012,"speed":24,"direction":102,"poll":"2022-08-25T17:25:00Z","departed":true,"arrived":false,"from":"VANCOUVER","to":"TORONTO","pollMin":6,"pollRadius":2448,"times":

 */


/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */


// The following does not work since files cant be blobs

// const reader = new FileReader();
//
// reader.readAsDataURL('stops.txt')
//
// console.log (reader)
