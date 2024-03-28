import utils from "../../utils/utils";

const headerRow = () => {
  const titleRow = document.createElement("ul");
  titleRow.className = "header-row";

  const titleRowItems = ["Day", "Weather", "Average", "Low", "High"];

  titleRowItems.forEach((titleRowItem) => {
    const titleRowItemElement = document.createElement("li");
    titleRowItemElement.className = "future-forecast-list-item";
    titleRowItemElement.textContent = titleRowItem;
    titleRow.appendChild(titleRowItemElement);
  });

  return titleRow;
};

const displayFutureDaysForecast = (displayUnit, futureDaysForecast) => {
  const futureForecastDiv = document.createElement("div");
  futureForecastDiv.className = "future-forecast-container";

  const futureForecastContent = document.createElement("div");
  futureForecastContent.className = "future-forecast-content";

  const daysList = document.createElement("ul");
  daysList.className = "future-forecast-list";

  const daysListItem = document.createElement("li");
  daysListItem.className = "future-forecast-list-row";

  const titleRow = headerRow();
  daysListItem.appendChild(titleRow);

  daysList.appendChild(daysListItem);

  futureDaysForecast.forEach((day) => {
    const daysWeatherInfoItem = document.createElement("li");
    daysWeatherInfoItem.className = "future-forecast-list-row";
    const daysWeatherInfo = document.createElement("ul");
    daysWeatherInfo.className = "future-forecast-list-row-items";

    const avgTemp =
      displayUnit === "Celcius" ? day.averageTempC : day.averageTempF;
    const minTemp = displayUnit === "Celcius" ? day.minTempC : day.minTempF;
    const maxTemp = displayUnit === "Celcius" ? day.maxTempC : day.maxTempF;

    const daysWeatherInfoItems = [
      day.date,
      day.conditionIcon,
      avgTemp,
      minTemp,
      maxTemp,
    ];

    daysWeatherInfoItems.forEach((item) => {
      const daysWetherInfoItem = document.createElement("li");
      daysWetherInfoItem.className = "future-forecast-list-item";
      if (item === day.date) {
        item === utils.TODAY
          ? (daysWetherInfoItem.textContent = "Today")
          : (daysWetherInfoItem.textContent = utils.getWeekday(
              new Date(day.date)
            ));
      } else if (item === day.conditionIcon) {
        const weatherIcon = document.createElement("img");
        weatherIcon.src = item;
        daysWetherInfoItem.appendChild(weatherIcon);
      } else {
        daysWetherInfoItem.textContent = item + "°";
      }
      daysWeatherInfo.appendChild(daysWetherInfoItem);
    });

    daysWeatherInfoItem.appendChild(daysWeatherInfo);
    daysList.appendChild(daysWeatherInfoItem);
  });
  futureForecastContent.appendChild(daysList);

  futureForecastDiv.appendChild(futureForecastContent);

  return futureForecastDiv;
};

export default displayFutureDaysForecast;
