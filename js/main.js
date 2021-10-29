const button = document.querySelector('.button-container');
const menu = document.querySelector('.dropdown-wrapper');

let menuToggle = false;

menu.style.right = '-600px';

function menuOpen(){
    if (menuToggle == false){
        menu.style.right = '0px';
        menuToggle = true;
    }
    else if (menuToggle == true){
        menu.style.right = '-500px';
        menuToggle = false;
    }
}

button.onclick = menuOpen;