import utils from "../../utils/utils";

const displayFutureDaysForecast = (displayUnit, futureDaysForecast) => {
  const futureForecastDiv = document.createElement("div");
  const daysList = document.createElement("ul");
  const titleRow = document.createElement("ul");

  const titleRowItems = ["Day", "Weather", "Average", "Low", "High"];

  titleRowItems.forEach((titleRowItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = titleRowItem;
    titleRow.appendChild(listItem);
  });

  daysList.appendChild(titleRow);

  futureDaysForecast.forEach((day) => {
    const daysWeatherInfo = document.createElement("ul");

    const avgTemp =
      displayUnit === "Celsius" ? day.averageTempC : day.averageTempF;
    const minTemp = displayUnit === "Celsius" ? day.minTempC : day.minTempF;
    const maxTemp = displayUnit === "Celsius" ? day.maxTempC : day.maxTempF;

    const daysWeatherInfoItems = [
      day.date,
      day.conditionIcon,
      avgTemp,
      minTemp,
      maxTemp,
    ];

    daysWeatherInfoItems.forEach((item) => {
      const listItem = document.createElement("li");
      if (item === day.date) {
        item === utils.TODAY
          ? (listItem.textContent = "Today")
          : (listItem.textContent = utils.getWeekday(new Date(day.date)));
      } else if (item === day.conditionIcon) {
        const weatherIcon = document.createElement("img");
        weatherIcon.src = item;
        listItem.appendChild(weatherIcon);
      } else {
        listItem.textContent = item + "°";
      }
      daysWeatherInfo.appendChild(listItem);
    });

    daysList.appendChild(daysWeatherInfo);
  });
  futureForecastDiv.appendChild(daysList);

  return futureForecastDiv;
};

export default displayFutureDaysForecast;
