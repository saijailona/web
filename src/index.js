import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import {getJsonMenu} from './modules/onlinelunches';

let lang = 'fi';

/**
 * Järjestä lista aakkosjärjestyksessä
 *
 */
const sortCourses = (courses, order = 'asc') => {
  let sortedMenu = courses.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Lataa menun etusivulle
 */
const showMenu = (restaurant, menu) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Satunnainen annos
 */
const randomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};
const displayRandomCourse = () => {
  alert('Sodexo: '+ randomCourse(SodexoData.getDailyMenu(lang)) + '\n'+ 'Fazer: '+ randomCourse(FazerData.getDailyMenu(lang)));
};

/**
 * Vaihda kieli
 */
const changeLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
  } else {
    lang = 'fi';
  }
  showMenu('sodexo', SodexoData.getDailyMenu(lang));
  showMenu('fazer', FazerData.getDailyMenu(lang));
};

/**
 * Function for showing sorted menu
 */
const renderSortedMenu = () => {
  showMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang)));
  showMenu('fazer', sortCourses(FazerData.getDailyMenu(lang)));
};


const init = () => {

  renderSortedMenu(FazerData.coursesFi, 'fazer');
  fetchData('https://www.sodexo.fi/ruokalistat/output/weekly_json/152').then(data => {
    console.log(data);
  });

  /*showMenu('sodexo', SodexoData.getDailyMenu('fi'));
  showMenu('fazer', FazerData.getDailyMenu('fi'));*/
  document.querySelector('#switch-lang').addEventListener('click', changeLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-random').addEventListener('click', displayRandomCourse);
};

init();


