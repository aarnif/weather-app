import loadingBox from "../loadingBox.js";
import errorBox from "../errorBox.js";
import displayWeatherSummary from "./weatherSummary.js";
import displayTodaysWeatherInfo from "./todaysWeatherInfo.js";
import displayNext24HoursForecast from "./next24HoursForecast.js";
import displayFutureDaysForecast from "./futureDaysForecast.js";
import conditions from "./conditions.js";

const addBackgroundImage = (weatherCondition) => {
  const body = document.querySelector("body");
  body.className =
    "m-0 box-border text-slate-200 text-lg bg-default bg-center bg-cover bg-no-repeat";
  // body.className = conditions[weatherCondition];
};

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
    next24HourForecast,
    todaysWeatherInfo,
    futureDaysForecast,
  } = weatherData.data;

  console.log("Updating content for location", todaysWeatherSummary.location);

  // addBackgroundImage(todaysWeatherSummary.conditionText);

  const weatherSummaryElement = displayWeatherSummary(
    displayUnit,
    todaysWeatherSummary
  );

  mainContentDiv.appendChild(weatherSummaryElement);

  const next24HoursForecastElement = displayNext24HoursForecast(
    displayUnit,
    next24HourForecast.forecast24Hour
  );

  mainContentDiv.appendChild(next24HoursForecastElement);

  const futureDaysForecastAndtodaysWeatherInfoContainer =
    document.createElement("div");

  futureDaysForecastAndtodaysWeatherInfoContainer.className =
    "future-forecast-and-todays-weather-container";

  const futureDaysForecastElement = displayFutureDaysForecast(
    displayUnit,
    futureDaysForecast.forecastDays
  );

  futureDaysForecastAndtodaysWeatherInfoContainer.appendChild(
    futureDaysForecastElement
  );

  const todaysWeatherInfoElement = displayTodaysWeatherInfo(
    displayUnit,
    todaysWeatherInfo
  );

  futureDaysForecastAndtodaysWeatherInfoContainer.appendChild(
    todaysWeatherInfoElement
  );

  mainContentDiv.appendChild(futureDaysForecastAndtodaysWeatherInfoContainer);

  return mainContentDiv;
};

const addMainContent = (content, data) => {
  content.appendChild(mainContent(data));
};

export default addMainContent;
