const div = document.querySelector('div');


let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawDiv = false;

let insertDivX;
let insertDivY;

const getColor = (e) => { //rgb color change
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = (red + green) / 2;
    return `rgb(${red}%, ${green}%, ${blue}%)`;
}
const holdDiv = (e) => {
    drawDiv = !drawDiv;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
}
const moveDiv = (e) => {
    if (drawDiv) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;

        const color = getColor(e);
        div.style.backgroundColor = color;
    }

}
const releaseDiv = () => {
    div.style.backgroundColor = '#000';
    drawDiv = !drawDiv;

}

div.addEventListener('mousemove', moveDiv);

div.addEventListener('mousedown', holdDiv);

div.addEventListener('mouseup', releaseDiv)