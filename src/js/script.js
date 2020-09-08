// Slider

new Splide( '.splide', {
    type: 'loop',
    speed: 2000,
    autoplay: true,
    perPage: 2,
    perMove: 2,
    gap: '1.2em',
    pagination: true,
    arrows: false
} ).mount();

new Splide( '.splideSmall', {
    type: 'loop',
    speed: 2000,
    autoplay: true,
    perPage: 1,
    perMove: 1,
    gap: '1em',
    pagination: true,
    arrows: false
} ).mount();


// See More button
let itemMob = document.getElementsByClassName('hide');
let seeButton = document.getElementById('seeButton');

if(innerWidth <= 480){
    for (let n = 0; n < itemMob.length; n++){
        itemMob[n].style.display = "none";
    }
}

function seeMore() {
    for (let i = 0; i < itemMob.length; i++) {

        if (itemMob[i].style.display === "none") {
            itemMob[i].style.display = 'flex';
            seeButton.innerHTML = 'See less';
        } else {
            itemMob[i].style.display = 'none';
            seeButton.innerHTML = 'See more';
        }
    }
}

// Mobile Menu

let x = document.getElementById('mobileMenu');
let burg = document.getElementById('burg');
x.style.display = "none";

function mobileMenu() {
    
    burg.classList.toggle("change");
    

    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex'}
  }




// Pop-up Order Bouquet
function getContacts() {

    let namaVal =  document.forms["forma"].elements["form-client"].value;
    let telVal =  document.forms["forma"].elements["form-tel"].value;

    console.log(`Client's name: ${namaVal}, User's tel: ${telVal}`);

    let mess = document.createElement('p');
    mess.className = 'message';
    mess.id = 'message';
    mess.innerHTML = 'Thank You for your message. We will get back to you soon =)';
    let frm = document.getElementById('forma');
    frm.append(mess);

    setTimeout (function () {
        document.getElementById('message').remove();
    }, 5000)
}


let modal = document.getElementById('popUp');
let wind = document.getElementById('modalW');
let butn = document.getElementById('butOpenModal');
modal.style.display = "none";

function openModal(){
    modal.style.display = 'flex';
    wind.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
    wind.style.display = 'none';
}



// Google Map

function initMap() {
    let ny = {lat: 46.477524, lng: 30.739699};
    let center = {lat: 46.476100, lng: 30.739699};


    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 16, 
            center: center,
            disableDefaultUI: true,
            styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ]
        });
    let iconBase = './assets/img/png/';
       
    let marker = new google.maps.Marker({
        position: ny, 
        icon: iconBase + 'marker.png',
        map: map
    });
}
