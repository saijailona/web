import SodexoLunchMenu from './assets/sodexo-week-example.json';
// console.log(SodexoLunchMenu);

const coursesEn = [];
const coursesFi = [];
let language = 'fi';
let currentMenu = coursesFi;

/**
 * Extract course titles from Sodexo menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */

const parseSodexoMenu = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};


const renderMenu = () => {
  const ulElement = document.querySelector('#sodexo');
  ulElement.innerHTML = '';
  for (const item of currentMenu) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};

const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = coursesEn;
  } else {
    language = 'fi';
    currentMenu = coursesFi;
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


const init = () => {
  parseSodexoMenu(SodexoLunchMenu.courses);
  renderMenu();

  document.querySelector('#lang').addEventListener('click', () => {
    switchLanguage();
    renderMenu();
  });
  document.querySelector('#random').addEventListener('click', () => {

    alert(pickARandomCourse(currentMenu));

  });
  document.querySelector('#sort').addEventListener('click', () => {
 
    currentMenu = sortCourses(currentMenu, 'desc');
    renderMenu();
  });
};
init();