'use strict'

    const coursesEn = ["Hamburger, cream sauce and poiled potates",
    "Goan style fish curry and whole grain rice",
    "Vegan Chili sin carne and whole grain rice",
    "Broccoli puree soup, side salad with two napas",
    "Lunch baguette with BBQ-turkey filling",
    "Cheese / Chicken / Vege / Halloum burger and french fries"];

    const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
    "Goalaista kalacurrya ja täysjyväriisiä",
    "Vegaani Chili sin carne ja täysjyväriisi",
    "Parsakeittoa,lisäkesalaatti kahdella napaksella",
    "Lunch baguette with BBQ-turkey filling",
    "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];


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