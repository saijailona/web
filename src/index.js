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

/**
 * Initialize application
 */
const init = () => {
  renderMenu(SodexoData.coursesFi, 'sodexo');
  renderMenu(FazerData.coursesFi, 'fazer');

  document.querySelector('#switch-lang').addEventListener('click', () => {
    switchLanguage();
  });
  document.querySelector('#pick-random').addEventListener('click', () => {
    alert(pickARandomCourse(currentMenu));

  });
  document.querySelector('#sort-menu').addEventListener('click', () => {
    currentMenu = sortCourses(currentMenu, 'desc');
  });
};
init();