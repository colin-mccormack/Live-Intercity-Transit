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

const fs = require('fs')

fs.readFile('stops.txt', (err, data) => {
    if (err) throw err;

    console.log(data);
})
