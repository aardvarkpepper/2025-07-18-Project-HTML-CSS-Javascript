var map = L.map('map').setView([51.505, -0.09], 13);

//console.log(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// setTimeout(() => {
//   console.log(map);
// }, 0);

// generic marker OK.
//var marker = L.marker([51.5, -0.09]).addTo(map);

// https://leafletjs.com/examples/custom-icons/
// can't access image.

var LeafIcon = L.Icon.extend({
  options: {
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [48, 56],
    // shadowSize: [50, 64],
    iconAnchor: [22, 94],
    // shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

var greenIcon = new LeafIcon({ iconUrl: './images/icon-location.png' });
//note:  iconUrl is relative to *index.html*.

L.icon = function (options) {
  return new L.Icon(options);
};

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map).bindPopup("I am a green leaf.");

