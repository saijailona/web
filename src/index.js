import LunchMenu from './assets/sodexo-week-example.json';
// Test
console.log(LunchMenu);

for (let i = 0; i < coursesEn.length; i++) {
    console.log(coursesEn[i]);
    document.getElementById("menuE").innerHTML += coursesEn[i] + '<br />';

}

for (let f = 0; f < coursesFi.length; f++) {
    console.log(coursesFi[f]);
    document.getElementById("menuF").innerHTML += coursesFi[f] + '<br />';
}

const langButton = document.getElementById("lang");
const sortButton = document.getElementById("sort");
const randomButton = document.getElementById("random");

const enDiv = document.getElementById("menuE");
const fiDiv = document.getElementById("menuF");
const sortEn = document.getElementById("sortE");
const sortFi = document.getElementById("sortF");

langButton.onclick = () => {
if (enDiv.style.display !== "none") {
    enDiv.style.display = "none";
    fiDiv.style.display = "block";
    langButton.innerHTML = "Eng";
} else {
    enDiv.style.display = "block";
    fiDiv.style.display = "none";
    langButton.innerHTML = "Fin";
}
};

coursesEn.sort();
coursesFi.sort();

sortButton.onclick = () => {
coursesEn.reverse();
coursesFi.reverse();

document.getElementById("menuE").innerHTML = coursesEn.join('<br />');
document.getElementById("menuF").innerHTML = coursesFi.join('<br />');
};



randomButton.onclick = () => {
if (enDiv.style.display !== "none") {
    let randomDish = coursesEn[Math.floor(Math.random() * coursesEn.length)];
    document.getElementById("randomDish").innerHTML = randomDish;
} else {
    let randomDish = coursesFi[Math.floor(Math.random() * coursesFi.length)];
    document.getElementById("randomDish").innerHTML = randomDish;
}
}