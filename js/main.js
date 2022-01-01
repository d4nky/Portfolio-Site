const button = document.querySelector('.button-container');
const menu = document.querySelector('.dropdown-wrapper');
const content = document.getElementById('content');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let menuToggle = false;

menu.style.right = '-600px';

function menuOpen(){
    if (menuToggle == false){
        menu.style.right = '0px';
        menuToggle = true;
    }
    else if (menuToggle == true){
        menu.style.right = '-600px';
        menuToggle = false;
    }
}

function menuClose(){
    menu.style.right = '-600px';
}


button.onclick = menuOpen;
content.onclick = menuClose;
