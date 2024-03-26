const displayWeatherSummary = (displayUnit, todaysWeatherSummary) => {
  const weatherSummaryDiv = document.createElement("div");
  weatherSummaryDiv.className = "w-full flex flex-col items-center mt-14";
  const locationTitle = document.createElement("h2");
  locationTitle.className = "m-2 text-6xl font-bold";
  locationTitle.textContent = todaysWeatherSummary.location;

  const temperatureContainer = document.createElement("div");
  temperatureContainer.className = "flex items-center";

  const temperatureNumber = document.createElement("h1");
  temperatureNumber.className = "m-2 text-8xl";
  temperatureNumber.textContent =
    displayUnit === "Celcius"
      ? todaysWeatherSummary.temperatureC
      : todaysWeatherSummary.temperatureF;

  const temperatureUnit = document.createElement("h3");
  temperatureUnit.textContent = displayUnit === "Celcius" ? " °C" : " °F";
  temperatureUnit.className = "text-4xl";

  temperatureContainer.appendChild(temperatureNumber);
  temperatureContainer.appendChild(temperatureUnit);

  const condition = document.createElement("div");
  condition.className = "m-2 text-4xl";
  condition.textContent = todaysWeatherSummary.conditionText;

  const highAndLowTemp = document.createElement("div");
  highAndLowTemp.className = "flex items-center";

  const highTemp = document.createElement("h4");
  highTemp.className = "m-2 text-2xl";

  highTemp.textContent = `High: ${
    displayUnit === "Celcius"
      ? todaysWeatherSummary.highTempC
      : todaysWeatherSummary.highTempF
  }°`;

  highAndLowTemp.appendChild(highTemp);

  const lowTemp = document.createElement("h4");

  lowTemp.className = "m-2 text-2xl";

  lowTemp.textContent = `Low: ${
    displayUnit === "Celcius"
      ? todaysWeatherSummary.lowTempC
      : todaysWeatherSummary.lowTempF
  }°`;

  highAndLowTemp.appendChild(lowTemp);

  weatherSummaryDiv.appendChild(locationTitle);
  weatherSummaryDiv.appendChild(temperatureContainer);
  weatherSummaryDiv.appendChild(condition);
  weatherSummaryDiv.appendChild(highAndLowTemp);

  return weatherSummaryDiv;
};

export default displayWeatherSummary;
