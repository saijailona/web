import SodexoData from './modules/sodexo-data';

let language = 'fi';
let current = SodexoData.coursesFi;

/**
 * Renders menu courses on page
 */
const render = () => {
  const ulElement = document.querySelector('#sodexo');
  ulElement.innerHTML = '';
  for (const item of current) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement.appendChild(listElement);
  }
};

/**
 * Toggle between en/fi
 */
const switchLang = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = SodexoData.coursesEn;
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
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
  const sorted = courses.sort();
  if (order === 'desc') {
    sorted.reverse();
  }
  return sorted;
};

/**
 * Picks a random dish
 *
 * @param {Array} courses menu
 * @returns {string} random dish
 */
const pickARandom = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};

const init = () => {
  renderMenu();
  document.querySelector('#lang').addEventListener('click', () => {
    switchLang();
    render();
  });
  document.querySelector('#random').addEventListener('click', () => {
    alert(pickARandom(current));

  });
  document.querySelector('#sort').addEventListener('click', () => {
    current = sortCourses(current, 'desc');
    render();
  });
};
init();