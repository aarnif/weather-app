import weatherData from "./data.js";
import dataService from "./services/data.js";
import displayService from "./services/display.js";

let index = 0;

const app = () => {
  const location = "Helsinki";
  const searchForm = document.getElementById("search-form");
  const changeDisplayUnitButton = document.getElementById(
    "change-display-unit"
  );

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

  changeDisplayUnitButton.addEventListener("click", () => {
    console.log("Change temperature unit to:", weatherData.displayUnit);
    weatherData.displayUnit =
      weatherData.displayUnit === "Celcius" ? "Fahrenheit" : "Celcius";

    changeDisplayUnitButton.textContent = `Display in ${
      weatherData.displayUnit === "Celcius" ? "F" : "C"
    }°`;

    if (weatherData.data) {
      displayService.updatePage(weatherData);
    }
  });
};

export default app;
