// create map
const map = L.map('mapid').setView([-27.2209595,-49.6482122], 15);

// create and add tileLayer
L   .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// creat popup overlay
const popup = L.popup({
    closeButton: false,
    cassName: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class ="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add market
L   .marker([-27.2209595,-49.6482122], {icon: icon})
    .addTo(map)
    .bindPopup(popup)
