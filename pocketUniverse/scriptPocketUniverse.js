import { importExportTest } from "./importPU.js";

// test if can switch map

const desktop = document.getElementsByClassName('top')[0];
const mobile = document.getElementsByClassName('bottom')[0];
let count = 0;
let desktopView = true;
function toggleMapID() {
  if ((window.innerHeight < 800 || window.innerWidth < 1440) && desktopView) {
    // no need to do expensive dom operations if not needed.
    desktop.style.height = "100px";
    desktopView = false;
    console.log(`desktop off ${desktop.id} , mobile on ${mobile.id} toggle ${desktopView}`);
  } else if ((window.innerHeight >= 800 && window.innerWidth >= 1440) && !desktopView) {
    desktop.style.height = "600px";
    desktopView = true;
    console.log(`mobile on ${mobile.id}, desktop off ${desktop.id} toggle ${desktopView}`);
  }
  //console.log(`Height: ${window.innerHeight}, width: ${window.innerWidth}, count ${count++}`);
}

window.onresize = toggleMapID;

const goMap = () => {
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
}
goMap();


const testImport = async () => {
  const testString = await importExportTest();
  console.log(testString);
}

testImport();