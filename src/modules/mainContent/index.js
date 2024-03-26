import loadingBox from "../loadingBox.js";
import errorBox from "../errorBox.js";
import displayWeatherSummary from "./weatherSummary.js";
import displayTodaysWeatherInfo from "./todaysWeatherInfo.js";
import displayNext24HoursForecast from "./next24HoursForecast.js";
import displayFutureDaysForecast from "./futureDaysForecast.js";

const mainContent = (weatherData) => {
  const { isLoading, isError, displayUnit } = weatherData;
  const mainContentDiv = document.createElement("div");

  if (isLoading) {
    console.log("Loading content...");
    const loadingDiv = loadingBox();
    mainContentDiv.appendChild(loadingDiv);
    return mainContentDiv;
  }

  if (isError) {
    console.error("Error loading content");
    const errorDiv = errorBox();
    mainContentDiv.appendChild(errorDiv);
    return mainContentDiv;
  }

  const {
    todaysWeatherSummary,
    todaysWeatherInfo,
    next24HourForecast,
    futureDaysForecast,
  } = weatherData.data;

  console.log(next24HourForecast);

  console.log("Updating content for location", todaysWeatherSummary.location);

  const weatherSummaryElement = displayWeatherSummary(
    displayUnit,
    todaysWeatherSummary
  );

  mainContentDiv.appendChild(weatherSummaryElement);

  const todaysWeatherInfoElement = displayTodaysWeatherInfo(
    displayUnit,
    todaysWeatherInfo
  );

  mainContentDiv.appendChild(todaysWeatherInfoElement);

  const next24HoursForecastElement = displayNext24HoursForecast(
    displayUnit,
    next24HourForecast.forecast24Hour
  );

  mainContentDiv.appendChild(next24HoursForecastElement);

  const futureDaysForecastElement = displayFutureDaysForecast(
    displayUnit,
    futureDaysForecast.forecastDays
  );

  mainContentDiv.appendChild(futureDaysForecastElement);

  return mainContentDiv;
};

const addMainContent = (content, data) => {
  content.appendChild(mainContent(data));
};

export default addMainContent;
