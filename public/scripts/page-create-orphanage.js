// create map
const map = L.map('mapid').setView([-27.2209595,-49.6482122], 15);

// create and add tileLayer
L   .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add photos field

function addPhotoField() {
    // take photos container #images
    const container = document.querySelector('#images')

    // take container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // duplicate last add image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verify if value is empty. if so, don't add new container
    const input = newFieldContainer.children[0]
    
    if (input.value == "") {
        return //retorno vazio termina a função
    }

    // clean field before add container
    input.value = ""

    // add duplicate to #image container
    container.appendChild(newFieldContainer)
}

// remove field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // if there is only one container, nothing happen
    if(fieldsContainer.length <= 1) {
        // clean the field value
        span.parentNode.children[0].value = ""
        return
    }

    // remove field
    span.parentNode.remove();
}

// select open-on-weekends yes/no
function toggleSelect (event) {
    // remove class .active from both buttons
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active')
    })

    // get clicked button and add class .active
    const button = event.currentTarget
    button.classList.add('active')
    
    // update input hidden with the select value
    const input =document.querySelector('[name="open-on-weekends"]')

    input.value = botton.dataset.value    
}