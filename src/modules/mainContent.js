import loadingBox from "./loadingBox";
import errorBox from "./errorBox";

const mainContent = (weatherData) => {
  const mainContentDiv = document.createElement("div");

  if (weatherData.isLoading) {
    console.log("Loading content...");
    const loadingDiv = loadingBox();
    mainContentDiv.appendChild(loadingDiv);
    return mainContentDiv;
  }

  if (weatherData.isError) {
    console.error("Error loading content");
    const errorDiv = errorBox();
    mainContentDiv.appendChild(errorDiv);
    return mainContentDiv;
  }

  console.log(
    "Updating content for location",
    weatherData.data.todaysWeatherSummary.location
  );

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = weatherData.data.todaysWeatherSummary.location;

  mainContentDiv.appendChild(locationTitle);

  return mainContentDiv;
};

const addMainContent = (content, data) => {
  content.appendChild(mainContent(data));
};

export default addMainContent;
