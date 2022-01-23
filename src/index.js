/* Arvaaminen tulee suorittaa haarukoimalla. Haarukointi aloitetaan minimiluvun ja maximiluvun puolesta välistä, 
arvauksen ollessa liian pieni siirrytään "suuremman" puolelle ja otetaan edellisen luvun ja maximiluvun puoliväli.
Arvauksen ollessa liian suuri siirrytän "pienemmän" puolelle ja otetaan edellisen luvun ja minimin puoliväli.
Esim. 1 ja 100 > valitaan 50
> 50 liian pieni
> otetaan 50 ja 100 puoliväli eli 75 jne...

> 50 liian suuri
> otetaan 50 ja 1 puoliväli eli 25 jne...*/

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

const numberArray = [];
for (let i = 0; i <= max; i++) {
    numberArray.push(i);
}

const numberGuess = () => {
    let start = 0;
    let end = numberArray.length - 1;

    while (start <= end && guessCount <= maxGuessCount) {
        // Määritellään kahden luvun puoliväli
        let middle = Math.ceil((start + end) / 2);
        // Jos random numero on tasan puoliväli
        if (randomNumber === numberArray[middle]) {
            guessField.value = middle;
            checkGuess();
            return console.log();
        }
        // Jos random numero on suurempi kuin puoliväli
        if (randomNumber > numberArray[middle]) {
            start = middle + 1;
            guessField.value = middle;
            checkGuess();
        }
        // Jos random numero on pienempi kuin puoliväli
        if (randomNumber < numberArray[middle]) {
            end = middle - 1;
            guessField.value = middle;
            checkGuess();
        }
    }
}

numberGuess();

function checkGuess() {
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

  function resetGame() {
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

/*  5.
    Keskiarvo about 5,8 eli käytännössä pyöristyy 6.
    Maksimiarvausmäärä 7.
    Minimiarvausmäärä 1, jos käy hyvä munkki (aika harvinaista).
    1000 kerran looppaus kestää n. 1 sekunnin. */