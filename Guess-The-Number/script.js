'use strict';
// Secret number
let number = Math.trunc(Math.random() * 19 + 1);
//Score
let score = 20;
//Game state 1 = in game / 0 - out of the game
let state = 1;
//High scores
let highscore = 0;
//Method to update the highscore
const highUpdate = function () {
  //Updating the highscore
  if (highscore < score) {
    highscore = score;
  }
  document.querySelector('.highscore').textContent = highscore;
};

//CSS styling methods
const win = function () {
  document.querySelector('body').style.background = 'green';
  document.querySelector('.number').textContent = number;
};
const lose = function () {
  document.querySelector('body').style.background = 'red';
  document.querySelector('.number').textContent = number;
};
//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 19 + 1);
  state = 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.background = '#444';
});
//Check button
document.querySelector('.check').addEventListener('click', function () {
  //Getting the input filed content and the entry.
  const value = document.querySelector('.guess').value;

  console.log(Number(value));
  if (state === 1) {
    //Evaluating the input content.
    if (!value) {
      //Incorrect input.
      document.querySelector('.message').textContent = 'Not a number!';
    } else if (value == number) {
      //Correct guess.
      document.querySelector('.message').textContent = 'Good pick!';
      document.querySelector('.number').textContent = number;
      highUpdate();
      win();
    } else {
      //Decreasing the score!
      if (score === 0) {
        //You lost message.
        document.querySelector('.message').textContent = 'Game over!';
        document.querySelector('.number').textContent = number;
        //Updating the highscore
        highUpdate();
        lose();
      } else {
        //Decreasing
        score--;
        document.querySelector('.score').textContent = score;
        //Incorrect guess
        if (value > number) {
          //Too high
          document.querySelector('.message').textContent = 'Value too high!';
        } else {
          // Too low
          document.querySelector('.message').textContent = 'Value too low!';
        }
      }
    }
  }
});
