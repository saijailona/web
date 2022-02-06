import FazerLunchMenuEn from './fazer-week-example-en.json';
import FazerLunchMenuFi from './fazer-week-example.json';
import {getJsonMenu} from './onlinelunches';


Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
};
const date = new Date().addHours(4).toISOString().slice(0, 10);
console.log(date);

const dataUrlFi = 'https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=' + date;
const dataUrlEn = 'https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=' + date;


/**
 * Parsing fazer menu for a day from json data
 *
 * @param {*} menuData - menu data
 * @param {*} dayOfWeek - index number for the day here monday
 * @returns {Array} - meals for a day
 */
 const parseMenu = (menuData, dayOfWeek) => {
  let dailyMenu = menuData.LunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    let mealName = setMenu.Name;
    let dishes = setMenu.Meals.map(dish => `${dish.Name} (${dish.Diets.join(', ')})`);
    dishes = dishes.join(', ');
    return mealName ? `${mealName}: ${dishes}` : dishes;
  });
  return dailyMenu;
};

let coursesFi = parseMenu(FazerLunchMenuFi, 0);
 //console.log('parsed fazer menu', coursesFi);
let coursesEn = parseMenu(FazerLunchMenuEn, 0);

const getDailyMenu = (lang, weekDay = 0) => {
  return (lang === 'fi') ?
  parseMenu(FazerLunchMenuFi, weekDay):parseMenu(FazerLunchMenuEn, weekDay);
};

/*const FazerData = {getDailyMenu};*/

const FazerData = {parseMenu, dataUrlFi, dataUrlEn};
export default FazerData;