// To get the IP Address locations, you'll be using the IP Geolocation API by IPify. 
// To generate the map, use LeafletJS.
const form = document.querySelector("#form");
const results = document.querySelector(".results");
const ipAddress = document.querySelector("#ip-address");
const geoLocation = document.querySelector("#location");
const timezone = document.querySelector("#timezone");
const isp = document.querySelector("#isp");
let searchInput;
let map;

form.addEventListener("submit", function(e){
    submitForm(e);
})

async function submitForm(e){
    e.preventDefault();
    searchInput = document.querySelector("#searchInput").value;
    const data = await search();
    results.innerHTML = "";
    dataRender(data);
    mapRender(data);
}
async function search(){
    const apiKey = "at_5Ym4HuBVs6zoKaGbMv3tsuQYWtRRk";
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchInput}`;
    const dataFetch = await fetch(url);
    const data = await dataFetch.json();
    return data;
}

function dataRender(data){
    ipAddress.innerHTML = data.ip;
    geoLocation.innerHTML = `${data.location.city}, ${data.location.country}`;
    timezone.innerHTML = `UTC ${data.location.timezone}`;
    isp.innerHTML = data.isp;
}

function mapRender(data){
    let lat = data.location.lat;
    let long = data.location.lng;
    
    if (map) {
        map.remove();
    }
    
    map = L.map('map').setView([lat, long], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([lat, long]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();    
}
