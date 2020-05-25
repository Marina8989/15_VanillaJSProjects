const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let randomColor = '#';
    for (i = 0; i < 6; i++) {
        randomColor += hexArray[randomCol()];

    }

    color.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});

function randomCol() {
    return Math.floor(Math.random() * hexArray.length);
}