// this causes dotenv issue
import { fetchIPAddress } from './server/server.js';
import { isLegalIPAddress } from './utils/utils.js';

//console.log(`API key ${API_KEY}`);
//console.log(`Server test success: ${server()}`);

var map = L.map('map').setView([0, 0], 13);
var CustomIcon = L.Icon.extend({
  options: {
    iconSize: [48, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  }
});
var blackIcon = new CustomIcon({ iconUrl: './images/icon-location.png' });
L.icon = function (options) {
  return new L.Icon(options);
};
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const container = document.getElementById('container');
const topId = document.getElementById('topId');
const topTitle = document.getElementById('top-title');
const bottom = document.getElementsByClassName('bottom')[0];
const inputField = document.getElementById('input-field'); // also use for input
const inputButton = document.getElementById('input-button');
const center = document.getElementById('center');
const verticalDividers = document.getElementsByClassName('vertical-divider');
const subsections = document.getElementsByClassName('subsection');
const subsectionContainerTop = document.getElementById('subsection-container-top');
const subsectionContainers = document.getElementsByClassName('subsection-container');
const subsectionTitles = document.getElementsByClassName('subsection-title');
const subsectionContents = document.getElementsByClassName('subsection-content');

const ipAddress = document.getElementById('ip-address'); // 192.212.174.101
const ipLocation = document.getElementById('ip-location'); // Brooklyn, NY 10001
const ipTimezone = document.getElementById('ip-timezone'); // UTC -05:00
const ipIsp = document.getElementById('ip-isp'); // SpaceX Starlink

let desktopView = true;

const reInitializeMapView = () => {
  if ((window.innerHeight < 800 || window.innerWidth < 1440) && desktopView) {
    desktopView = false;
  } else if ((window.innerHeight >= 800 && window.innerWidth >= 1440) && !desktopView) {
    desktopView = true;
  }
  //console.log(`reInitializeMapView invoked with desktopView ${desktopView}`);
}

reInitializeMapView();

const setWidthHeight = (htmlElement, width, height) => {
  htmlElement.style.width = `${width}px`;
  htmlElement.style.height = `${height}px`;
}

function changeDimensions() {
  if ((window.innerHeight < 800 || window.innerWidth < 1440) && desktopView) {
    desktopView = false;
    //console.log('attempting mobile view');
    // no need to do expensive dom operations if not needed.
    setWidthHeight(container, 375, 828);
    // 'top' may be a reserved word (?);
    setWidthHeight(topId, 375, 300);
    topId.style.backgroundImage = '../images/pattern-bg-mobile.png';
    topTitle.style.fontSize = "1.54rem";
    topTitle.style.letterSpacing = "0.03rem";
    setWidthHeight(bottom, 375, 528);
    inputField.style.fontSize = "1.14rem";
    inputField.style.padding = "18px 23px";
    inputField.size = "22";
    setWidthHeight(center, 327, 295);
    center.style.top = "167px";
    center.style.flexDirection = "column";
    for (const verticalDivider of verticalDividers) {
      verticalDivider.style.display = "none";
    }
    for (const subsection of subsections) {
      subsection.style.width = "auto"; // ?
    }
    subsectionContainerTop.style.marginTop = "26px";
    for (const subsectionContainer of subsectionContainers) {
      subsectionContainer.style.height = "67px";
      subsectionContainer.style.padding = "0px";
      subsectionContainer.style.textAlign = "center";
    }
    for (const subsectionTitle of subsectionTitles) {
      subsectionTitle.style.fontSize = "0.65rem";
      subsectionTitle.style.letterSpacing = "0.08rem";
    }
    for (const subsectionContent of subsectionContents) {
      subsectionContent.style.width = "auto"; // ?
      subsectionContent.style.paddingTop = "10px";
      subsectionContent.style.fontSize = "1.2rem";
      subsectionContent.style.letterSpacing = "0.02rem;";
    }
  } else if ((window.innerHeight >= 800 && window.innerWidth >= 1440) && !desktopView) {
    desktopView = true;
    //console.log('attempting desktop view');
    setWidthHeight(container, 1440, 900);
    setWidthHeight(topId, 1440, 280);
    inputField.size = "48";
    topId.style.backgroundImage = '../images/pattern-bg-desktop.png';
    topTitle.style.fontSize = "2rem";
    topTitle.style.letterSpacing = "";
    setWidthHeight(bottom, 1440, 520);
    inputField.style.fontSize = "1.16rem";
    inputField.style.padding = "19px 23px";
    setWidthHeight(center, 1110, 161);
    center.style.top = "199px";
    center.style.flexDirection = "row";
    for (const verticalDivider of verticalDividers) {
      verticalDivider.style.display = "block";
    }
    for (const subsection of subsections) {
      subsection.style.width = "276px";
    }
    subsectionContainerTop.style.marginTop = "";
    for (const subsectionContainer of subsectionContainers) {
      subsectionContainer.style.height = "89px";
      subsectionContainer.style.padding = "35px 32px";
      subsectionContainer.style.textAlign = "left";
    }
    for (const subsectionTitle of subsectionTitles) {
      subsectionTitle.style.fontSize = "0.8rem";
      subsectionTitle.style.letterSpacing = "0.07rem";
    }
    for (const subsectionContent of subsectionContents) {
      subsectionContent.style.width = "190px";
      subsectionContent.style.paddingTop = "15px";
      subsectionContent.style.fontSize = "1.5rem";
      subsectionContent.style.letterSpacing = "0.05rem;";
    }
  }
}

window.onresize = changeDimensions;
//window.onresize = reportWindowSize;
//addEventListener("resize", (event) => { })

//console.log(server());

const goMap = async () => {
  const data = await fetchIPAddress();
  //   const ipAddress = document.getElementById('ip-address'); // 192.212.174.101
  // const ipLocation = document.getElementById('ip-location'); // Brooklyn, NY 10001
  // const ipTimezone = document.getElementById('ip-timezone'); // UTC -05:00
  // const ipIsp = document.getElementById('ip-isp'); // SpaceX Starlink
  ipAddress.textContent = `${data.ip}`;
  ipLocation.textContent = `${data.location.city}, ${data.location.region.split(" ").map(element => element[0]).join("")} ${data.location.postalCode}`;
  ipTimezone.textContent = `UTC ${data.location.timezone}`;
  ipIsp.textContent = `${data.isp}`;
  const lat = data.location.lat;
  const lng = data.location.lng;
  //console.log(`Lat ${lat}, long ${lng}`);
  //var map = L.map('map').setView([51.505, -0.09], 13);
  // var map = L.map('map').setView([lat, lng], 13);
  map.setView([lat, lng], 13);
  //map.setView([51.5072,0.1276],13);


  //console.log(map);




  //note:  iconUrl is relative to *index.html*.
  L.marker([lat, lng], { icon: blackIcon }).addTo(map).bindPopup("IP address location.");
}

goMap();

// add "keypress" checking for event.key;  Technically event isn't required on click.
inputButton.addEventListener('click', async (event) => {
  // test for 192.212.174.101, London.
  const inputString = inputField.value;
  // console.log(inputString);
  // console.log(`Is it an IP address? ${isLegalIPAddress(inputString)}`);
  // console.log(`attempting to print map ${JSON.stringify(L)}`);
  let data;

  if (isLegalIPAddress(inputString)) {
    // probably stick this stuff inside a function and call it on the else too.
    try {
      data = await fetchIPAddress(inputString, null);
      //{"code":422,"messages":"Input correct domain."}
      if (data.code === 422) {
        inputField.value = `${inputString} not valid IP.`
      } else {
        const lat = data.location.lat;
        const lng = data.location.lng;
        map.setView(new L.LatLng(lat, lng), 13);
        ipAddress.textContent = `${data.ip}`;
        ipLocation.textContent = `${data.location.city}, ${data.location.region.split(" ").map(element => element[0]).join("")} ${data.location.postalCode}`;
        ipTimezone.textContent = `UTC ${data.location.timezone}`;
        //console.log(`ipIsp.textContent = ${data.isp}`);
        if (data.isp === '') {
          ipIsp.textContent = `Data not available`
        } else {
          ipIsp.textContent = `${data.isp}`
        }
        // I've got another marker floating around but eh.
        L.marker([lat, lng], { icon: blackIcon }).addTo(map).bindPopup("IP address location.")
      }
    } catch (error) {
      console.error(`error`);
      console.log(`Code: ${error.code}, Messages ${error.messages}, on scriptLegalIPAddress`)
    }
  } else {
    try {
      if (data.code === 422) {
        inputField.value = `${inputString} not valid domain.`
      } else {
        data = await fetchIPAddress(null, inputString); // sends argument domain
        const lat = data.location.lat;
        const lng = data.location.lng;
        map.setView(new L.LatLng(lat, lng), 13);
        ipAddress.textContent = `${data.ip}`;
        ipLocation.textContent = `${data.location.city}, ${data.location.region.split(" ").map(element => element[0]).join("")} ${data.location.postalCode}`;
        ipTimezone.textContent = `UTC ${data.location.timezone}`;
        //console.log(`ipIsp.textContent = ${data.isp}`);
        if (data.isp === '') {
          ipIsp.textContent = `Data not available`
        } else {
          ipIsp.textContent = `${data.isp}`
        }
        L.marker([lat, lng], { icon: blackIcon }).addTo(map).bindPopup("IP address location.")
      }
    } catch (error) {
      console.error(`error`, error);
      console.log(`Code: ${error.code}, Messages ${error.messages} on scriptDomain`)
    }}
    //else
})
// addEventListener

