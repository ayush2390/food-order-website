'use strict';
//.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = "Correct Number";
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;

//document.querySelector('.guess').value = 23;
//.log(document.querySelector('.guess').value);

let num  = Math.trunc(Math.random()*20)  + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if(!guess){
    displayMessage('No Number!');
  }
  else if (guess === num){
    displayMessage("Correct Number");

    document.querySelector('.number').textContent = num;

    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector(".number").style.width = '30rem';

    if(score>highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  else if(guess !== num){
    if (score>1){
      displayMessage(guess < num ? "Too low" : "Too high");
      score--;
      document.querySelector('.score').textContent = score;
    }
      else { displayMessage("You lost the game");
    document.querySelector('.score').textContent = 0;
  }
    }
/*  else if (guess < num){
    if(score>1){
    document.querySelector('.message').textContent = "Too low";
    score--;
    document.querySelector('.score').textContent = score;}
    else { document.querySelector('.message').textContent = "You lost the game";
  document.querySelector('.score').textContent = 0;}
  }
  else if (guess > num){
    if(score>1){
    document.querySelector('.message').textContent = "Too high";
    score--;
    document.querySelector('.score').textContent = score;}
    else { document.querySelector('.message').textContent = "You lost the game";
  document.querySelector('.score').textContent = 0;}
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  num  = Math.trunc(Math.random()*20)  + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector("body").style.backgroundColor = '#222';
  displayMessage("Start guessing...");
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector(".number").style.width = '15rem';

})