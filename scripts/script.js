// this causes dotenv issue
import { server } from './server/server.js';

console.log(`Server test success: ${server()}`);

//console.log(server());

var map = L.map('map').setView([51.505, -0.09], 13);

//console.log(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [48, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  }
});

var greenIcon = new LeafIcon({ iconUrl: './images/icon-location.png' });
//note:  iconUrl is relative to *index.html*.

L.icon = function (options) {
  return new L.Icon(options);
};

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map).bindPopup("IP address location.");

