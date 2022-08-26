
function makeStationIcons(json) {
    let stations = JSON.parse(json);
    for (var i = 0; i < stations.length; i++) {
        //L.Marker([stations[i].stop_lat, stations[i].stop_lon], {icon: stationIcon}).addTo(map).bindPopup(stations[i].stop_name);
        var marker = new L.Marker([stations[i].stop_lat, stations[i].stop_lon], {icon: stationIcon});
        marker.addTo(map).bindPopup(stations[i].stop_name);
        console.log ("Marker added");
    }
}

var map = L.map('map').setView([43.6437947,-79.3835378], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var stationIcon = L.icon({
    iconUrl: '../IMG/stationMarker.png',

    iconSize:     [40, 40], // size of the icon
    popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
});

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log (this.getAllResponseHeaders());
        //console.log (this.responseText);
        makeStationIcons(this.responseText);
    }
};
let getURL = window.location.href + "all"
xhttp.open("GET", getURL, true);
xhttp.send();

// let geoJSONPAths = [
//     "../GeoJSON/nrwn_rfn_on_kml_eng1.json", "../GeoJSON/nrwn_rfn_on_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_ab_kml_eng1.json", "../GeoJSON/nrwn_rfn_ab_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_mb_kml_eng1.json", "../GeoJSON/nrwn_rfn_mb_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_nb_kml_eng1.json", "../GeoJSON/nrwn_rfn_nb_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_nl_kml_eng1.json", "../GeoJSON/nrwn_rfn_nl_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_ns_kml_eng1.json", "../GeoJSON/nrwn_rfn_ns_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_nt_kml_eng1.json", "../GeoJSON/nrwn_rfn_nt_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_qc_kml_eng1.json", "../GeoJSON/nrwn_rfn_qc_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_sk_kml_eng1.json", "../GeoJSON/nrwn_rfn_sk_kml_eng2.json",
//     "../GeoJSON/nrwn_rfn_yt_kml_eng1.json", "../GeoJSON/nrwn_rfn_yt_kml_eng2.json"
// ]
// window.onload = function() {
//     for (let i = 0; i < geoJSONPAths.length; i++) {
//         var geojson = new L.GeoJSON.AJAX(geoJSONPAths[i]);
//         geojson.addTo(map);
//     }
//     console.log("GEOJSON added")
// }


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
