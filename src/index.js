import FazerMenu from './assets/fazermenu.json'

const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

// A1
menu.forEach(meal => {
  const regexp = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  const test = regexp.test(meal.name);

  if(!test) {
    console.log(meal.name + ' isnt valid');
  } else {
    console.log(meal.name + ' is valid');
  }
});

// A2
const priceSort = menu.sort((a, b) => {
  return b.price - a.price;
});
console.log('Sorted meals by price: ', priceSort);

priceSorted(menu);

//A3
const priceFilter = (array) =>{
  const cheap = array.filter((food) => {
    return food.price < 5;
  });
  console.log('Food under 5€ ', cheap);
};
priceFilter(menu);

//A4
const priceRaise = (array, amount) => {
  const priceCalculator = (amount / 100 + 1);
  const newPrice = array.map((food) => {
    return {
      name: food.name,
      price: (food.price * priceCalculator).toFixed(2),
    };
  });
  console.log('New, raised prices', newPrice);
};
priceRaise(menu, 15);

//A5
const total = (array) => {
  const sum = array.reduce((a,b) => ({price: a.price + b.price}));
  console.log('The whole menu costs: ', sum);
};
total(menu);

//B
const veganFood = getParsedMenuFazer.sort((veg) => {
  return {Diets: "Veg"};
});
console.log(veganFood);
