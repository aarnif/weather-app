import loadingBox from "../loadingBox.js";
import errorBox from "../errorBox.js";
import displayWeatherSummary from "./weatherSummary.js";

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

  const { todaysWeatherSummary, todaysWeatherInfo, next24HourForecast } =
    weatherData.data;

  console.log(next24HourForecast);

  console.log("Updating content for location", todaysWeatherSummary.location);

  const weatherSummaryElement = displayWeatherSummary(
    displayUnit,
    todaysWeatherSummary
  );

  mainContentDiv.appendChild(weatherSummaryElement);

  return mainContentDiv;
};

const addMainContent = (content, data) => {
  content.appendChild(mainContent(data));
};

export default addMainContent;
