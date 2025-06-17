// DOM Elements
const shapeElem = document.querySelector('.shape');
const leftElem = document.getElementById('left');
const topElem = document.getElementById('top');
const rightElem = document.getElementById('right');
const bottomElem = document.getElementById('bottom');
const rangerElem = document.getElementById('ranger');
const codeElem = document.querySelector('.code');

function leftSlider(event) {
    if (event.target.id !== 'left') return;

    if (event.target.checked) {
        ranger(leftElem);
    }
}

function ranger() {
    let rangerValue = rangerElem.value;
    elem.style.top = `${rangerValue}%`;
}

document.addEventListener('change', leftSlider);

function topSlider(event) {
    if (event.target.id === 'top' && event.target.checked) {
        ranger(topElem);
    }
}

function rightSlider(event) {
    if (event.target.id === 'right' && event.target.checked) {
        ranger(rightElem);
    }
}
