const displayWeatherSummary = (displayUnit, todaysWeatherSummary) => {
  const weatherSummaryDiv = document.createElement("div");
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = todaysWeatherSummary.location;

  const temperature = document.createElement("div");
  temperature.textContent =
    displayUnit === "Celcius"
      ? todaysWeatherSummary.temperatureC + " °C"
      : todaysWeatherSummary.temperatureF + " °F";

  const condition = document.createElement("div");
  condition.textContent = todaysWeatherSummary.conditionText;

  const conditionIcon = document.createElement("img");
  conditionIcon.src = todaysWeatherSummary.conditionIcon;

  weatherSummaryDiv.appendChild(locationTitle);
  weatherSummaryDiv.appendChild(temperature);
  weatherSummaryDiv.appendChild(condition);
  weatherSummaryDiv.appendChild(conditionIcon);

  return weatherSummaryDiv;
};

export default displayWeatherSummary;
