import weatherData from "./data.js";
import dataService from "./services/data.js";
import displayService from "./services/display.js";

const showWeatherData = (location) => {
  console.log("Fetching weather data for location:", location);
  dataService
    .getAllWeatherData(location)
    .then((data) => {
      console.log("Weather data fetched successfully:", data);
      weatherData.isLoading = false;
      weatherData.isError = false;
      weatherData.data = data;
      console.log(weatherData);
      displayService.updatePage(weatherData);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      weatherData.isLoading = false;
      weatherData.isError = true;
      weatherData.data = null;
      displayService.updatePage(weatherData);
    });
};

const app = () => {
  const defaultLocation = "Helsinki"; // When the page loads for the first time
  const searchForm = document.getElementById("search-form");
  const changeDisplayUnitButton = document.getElementById(
    "change-display-unit"
  );

  showWeatherData(defaultLocation);

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    event.target.location.value = "";
    weatherData.isLoading = true;
    console.log("Search location:", location);
    console.log(weatherData);

    showWeatherData(location);
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

  const updateHoursBasedOnWidth = () => {
    console.log("Window width:", window.innerWidth);
    displayService.update24HourForecast(
      weatherData.displayUnit,
      weatherData.data.next24HourForecast.forecast24Hour
    );
  };

  window.addEventListener("resize", updateHoursBasedOnWidth);
};

export default app;
