const NoofColors =
    [
        'green',
        'yellow',
        'red',
        'blue',
        'purple',
        'brown',
        'gray',
        'black',
        'orange',
        'aqua',
        'aquamarine',
        'burlywood'
    ];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // get random number between 0 - NoofColors length
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = NoofColors[randomNumber];
    color.textContent = NoofColors[randomNumber];
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * NoofColors.length);
}
