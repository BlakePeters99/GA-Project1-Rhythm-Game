let sound1 = document.getElementById('#audio1');
let bodyElement = document.querySelector('body');
let button1 = document.querySelector('.btn1');

button1.addEventListener("click", click1());

function click1() {
    sound1.onplay();
    bodyElement.style.backgroundColor = 'red';
}
bodyElement.style.backgroundColor = 'blue';