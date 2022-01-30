import FazerLunchMenuEn from './fazer-week-example-en.json';
import FazerLunchMenu from './fazer-week-example.json';

console.log('moikkamoi');
console.log("fazer-data", FazerLunchMenuEn, FazerLunchMenu);

/**
 * Parses a menu for a day from Fazer weekly json data
 *
 * @param {*} menuData - json data
 * @param {*} dayOfWeek - index number of the day (0: Monday)
 * @returns {Array} - meals for a day
 */


const parseDayMenu = (lunchMenus, dayOfWeek) => {
  const dayMenu = lunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    const name = setMenu.Name;
    let meals = '';
    for(const meal of setMenu.Meals){
      meals += meal.Name + ', ';
    }
    return name ? name + ': ' +meals : meals;
  });
  return dayMenu;
};

let coursesFi = parseDayMenu(FazerLunchMenu.LunchMenus, 0);
let coursesEn = parseDayMenu(FazerLunchMenuEn.LunchMenus, 0);;

const FazerData = {coursesEn, coursesFi, getDailyMenu};

const getDailyMenu = (language, weekDay = 0) => {
  return (language === 'fi') ?
  parseDayMenu(FazerLunchMenuFi, weekDay):parseDayMenu(FazerLunchMenuEn, weekDay);
};


export default FazerData;