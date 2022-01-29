// Tehtävä 1. Kirjoita "salasana" löytääksesi salasanan.
const salasana = (salasana) => {
  let keyHistory = new Array(salasana.length);
  document.addEventListener('keypress', event => {
      keyHistory.shift();
      keyHistory.push(event.key);
      if (keyHistory.join('').toLowerCase() === salasana.toLowerCase()) {
          alert("Correct cheat code");
      }
  });
};
salasana('salasana');

// Tehtävä 2. 
document.getElementById("div").ondblclick = () => { fun(); };

const fun = () => {
  document.querySelector('body').addEventListener('dblclick', (event) => {
      let x = event.clientX;
      let y = event.clientY;
      console.log('Hiiren koodinaatit: X: ' + x + '\tY: ' + y);

      // Näyttää koordinaatit sivulla
      const coords = 'Hiiren koordinaatit: X: ' + x + '\tY: ' + y;
      document.getElementById("p").innerHTML = coords;
  });
};

// Tehtävä 3. Tulostaa nappia painaessa, ei reagoi hiiren klikkauksiin.

document.addEventListener('keydown', event =>{
  console.log('Painoit: ', event.key);
});


// Tehtävä 4. Alert, kun käyttäjä on ollut sivulla 15 sekuntia.

const timer = () => {
  setTimeout(() => {
      alert('Hurry up!');
  }, 15000);
};
timer();

// Tehtävä 5. Alert, kun käyttäjä on idlettänyt 15 sekuntia.

const waiting = (duration) => {
  let timer;
  const resetTimer = (event) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          alert('HURRY UP!!');
      }, duration * 1000);
  };
  resetTimer();

  document.addEventListener('keypress', resetTimer);
  document.addEventListener('mousemove', resetTimer);
};
waiting(15);