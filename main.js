let menuButton = document.getElementById('icon');
let ul = document.getElementById('ul');
let menuClose = document.getElementById('icon2');

function toggle() {
    if (ul.style.display === 'none') {
    ul.style.display = 'flex';
}
    else {
        ul.style.display = 'none';
    }
}

menuButton.onclick = toggle;
