@@include('_slider.js');
@@include('_map.js');




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

