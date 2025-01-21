import addMainContent from "../modules/mainContent/index.js";
import { createHoursList } from "../modules/mainContent/next24HoursForecast.js";

const content = document.getElementById("content");

const emptyContent = () => {
  content.innerHTML = "";
};

const updatePage = (data) => {
  emptyContent();
  addMainContent(content, data);
};

const update24HourForecast = (displayUnit, next24HourForecast) => {
  const hourlyForecastDiv = document.getElementById("next-24-hours-forecast");
  hourlyForecastDiv.innerHTML = "";
  hourlyForecastDiv.classList.remove("animate-emerge-down");
  hourlyForecastDiv.appendChild(
    createHoursList(displayUnit, next24HourForecast)
  );
};

export default { updatePage, update24HourForecast };
