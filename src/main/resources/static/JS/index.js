

var map = L.map('map').setView([49.0587, -81.0108], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);



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
