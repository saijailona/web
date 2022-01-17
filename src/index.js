
const min = 1;
const max = 100;

let randomNumber = Math.floor(Math.random() * max - min) + min;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const maxGuessCount = 10;

let guessCount = 1;
let resetButton;

checkGuess = () => {
    const userGuess = Number(guessField.value);
    if (guessCount <= 1) {
      guesses.textContent = 'Previous guesses: ';
      startTime = Date.now();
      console.log('start time: ', startTime);
    }

    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';

      const endTime = Date.now();
        let playTime = Math.floor((endTime - startTime) / 1000);
        document.getElementById("playTime").innerHTML = 'Total time used: ' + playTime + ' seconds'+ '<br />' + 'Total amount of guesses: ' + guessCount;
        console.log('end time: ', endTime, 'total time: ', (endTime - startTime) / 1000);
      
        setGameOver();

    } else if (guessCount === maxGuessCount) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      
      const endTime = Date.now();
      let playTime = Date.now();
      let timeUsed = Math.floor((endTime - startTime) / 1000);
      document.getElementById("timeUsed").innerHTML = 'Total time used: ' + timeUsed + ' seconds' + '<br />' + ' Total amount of guesses: ' + guessCount;
      console.log('end time: ', endTime, 'total time: ', (endTime - startTime) / 1000);
        
      setGameOver();

    } else {
      lastResult.textContent = 'Wrong. Try again!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
  
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

  guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  resetGame = () => {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * max - min) + min;
  }
  