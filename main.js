const colorArray = ['red', 'green', 'pink', 'orange', 'tomato'];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    const randomCol = randomColor();
    document.body.style.backgroundColor = colorArray[randomCol];
    color.textContent = colorArray[randomCol];
});


function randomColor() {
    return Math.floor(Math.random() * colorArray.length);
}