import weatherData from "./data.js";
import dataService from "./services/data.js";
import displayService from "./services/display.js";

const app = () => {
  const searchForm = document.getElementById("search-form");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    event.target.location.value = "";
    weatherData.isLoading = true;
    console.log("Search location:", location);
    console.log(weatherData);

    displayService.updatePage(weatherData);

    dataService
      .getAllWeatherData(location)
      .then((data) => {
        weatherData.isLoading = false;
        weatherData.isError = false;
        weatherData.data = data;
        console.log(weatherData);
        displayService.updatePage(weatherData);
      })
      .catch((error) => {
        weatherData.isLoading = false;
        weatherData.isError = true;
        weatherData.data = null;
        console.error(error);
        displayService.updatePage(weatherData);
      });
  });
};

export default app;
