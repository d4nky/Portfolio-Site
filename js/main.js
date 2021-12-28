const button = document.querySelector('.button-container');
const menu = document.querySelector('.dropdown-wrapper');
const content = document.getElementById('content');
const languageSelector = document.getElementById('language-selector');
const french = document.querySelector('.french');
const english = document.querySelector('.english');
const frenchSelector = document.querySelector('#french-selector');
const englishSelector = document.querySelector('#english-selector');
const form = document.getElementById('form');


// Menu
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



//Form submition
form.onsubmit = formSubmit();
function formSubmit(e){
    e.preventDefault();
    const username = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const subject = document.getElementById('object-input').value;
    const description = document.getElementById('description-input').value;
}



// // Language changer
french.style.display = 'none';

function languageSwitch(){
    if(languageSelector.value = 'english'){
        french.style.display = 'none';
        console.log(languageSelector.value);
    }
    else if(languageSelector.selected.value = 'french'){
        english.style.display = 'none';
        console.log(languageSelector.value);
    }
}
languageSelector.onchange = languageSwitch;


