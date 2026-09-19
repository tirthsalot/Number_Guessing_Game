let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number-box');
const guessInput = document.querySelector('#guess-input');
const checkBtn = document.querySelector('#check-btn');
const againBtn = document.querySelector('#again-btn');

checkBtn.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if(!guess || guess < 1 || guess > 20) {
        messageEl.textContent = 'Please Enter a number between 1 and 20 ';
        return; 
    }

    if (guess === secretNumber) {
        messageEl.textContent = 'Correct Number';
        numberEl.textContent = secretNumber;
        document.querySelector('.game-container').style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        }
    }

    else if (guess != secretNumber) {
        if (score > 1) {
            messageEl.textContent = guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            scoreEl.textContent = score;

        }else {
            messageEl.textContent = 'You lost the game';
            scoreEl.textContent = 0;
        }
    }
});

againBtn.addEventListener('click',function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    messageEl.textContent = 'Start guessing';
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    guessInput.value = '';

    document.querySelector('.game-container').style.backgroundColor = '#081929';
});
