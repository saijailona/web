import FazerData from './modules/fazer-data';
import SodexoData from './modules/sodexo-data';

console.log("index.js");
let language = 'fi';

/**
 * Renders menu courses on page
 */
const renderMenu = (data, targetId) => {
  const ulElement = document.querySelector('#'+ targetId);
  ulElement.innerHTML = '';
  for (const item of data) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};


/**
 * Toggle between en/fi
 */
const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    renderMenu = (SodexoData.coursesEn, 'sodexo');
    renderMenu = (FazerData.coursesEn, 'fazer');

  } else {
    language = 'fi';
    renderMenu = (SodexoData.coursesFi, 'sodexo');
    renderMenu = (FazerData.coursesFi, 'fazer');
  }
};

/**
 * Sort courses alphapetically
 *
 * @param {Array} courses menu array
 * @param {string} order 'asc'/'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  const sortedCourses = courses.sort();
  if (order === 'desc') {
    sortedCourses.reverse();
  }
  return sortedCourses;
};

/**
 * Picks a random dish
 *
 * @param {Array} courses menu
 * @returns {string} random dish
 */
const pickARandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};

const displayRandomCourse = () => {
  alert('Sodexo: '+ pickrandomCourse(SodexoData.getDailyMenu(lang)) + '\n'+ 'Fazer: '+ pickrandomCourse(FazerData.getDailyMenu(lang)));
};

const renderSortedMenu = () => {
  showMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang)));
  showMenu('fazer', sortCourses(FazerData.getDailyMenu(lang)));
};

/**
 * Initialize application
 */
const init = () => {
  renderMenu('sodexo', SodexoData.getDailyMenu('fi'));
  renderMenu('fazer', FazerData.getDailyMenu('fi'));

  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#pick-random').addEventListener('click', renderSortedMenu);
  document.querySelector('#sort-menu').addEventListener('click', displayRandomCourse);
};
init();