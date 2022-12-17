let menuButton = document.getElementsByClassName('icon');
let navLi = document.getElementsByTagName('li');

function toggleMenu(){
    navLi.style.display = 'block';
}

menuButton.onclick = toggleMenu;