const proxyUrl = 'http://cors-anywhere.herokuapp.com/';

const getJsonMenu = async (menuUrl, useProxy = true) => {
  let response;
  try {
      response = await fetch(`${useProxy ? proxyUrl : ''}${menuUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
  } catch (error){
    console.log('fetch menu error', error.message);
  }
  let vastaus = await response.json();
  return vastaus;
};

getJsonMenu('https://www.sodexo.fi/ruokalistat/output/weekly_json/152')
.then(data => showMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang))));
getJsonMenu('https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=2022-02-01')
.then(data => showMenu('fazer', sortCourses(FazerData.getDailyMenu(lang))));

export {getJsonMenu};