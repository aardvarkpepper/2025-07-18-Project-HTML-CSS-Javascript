// zoom etc. functionality doesn't work, link is dead.

var map = L.map('map').setView([51.505, -0.09], 13);
console.log(map); // Looks like there's setters and getters.  Above should work.  Toggles of class properties (mostly with _ prefixes) set to true.
// e.g. console.log shows e.dragging._enabled: true before running any of the 'enables'.

// map.zoomControl.enable();
// map.touchZoom.enable();
// map.doubleClickZoom.enable();
// map.scrollWheelZoom.enable();
// map.keyboard.enable();
// map.zoomControl.enable();
// map.dragging.enable();


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
    shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

var greenIcon = new LeafIcon({ iconUrl: 'leaf-green.png' });

L.icon = function (options) {
  return new L.Icon(options);
};

L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map).bindPopup("I am a green leaf.");

