var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    nextimg()
}, 5000)

function nextimg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img alagoas/menu_white_36dp.svg";
    }
    else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img alagoas/close_white_36dp.svg";
    }
}