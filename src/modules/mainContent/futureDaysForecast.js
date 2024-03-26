import utils from "../../utils/utils";

const displayFutureDaysForecast = (displayUnit, futureDaysForecast) => {
  const futureForecastDiv = document.createElement("div");
  futureForecastDiv.className = "future-forecast-container";

  const futureForecastContent = document.createElement("div");
  futureForecastContent.className = "flex-grow flex flex-wrap justify-center";

  const daysList = document.createElement("ul");
  daysList.className =
    "flex-grow max-w-[1000px] flex flex-col justify-center items-center";

  const titleRow = document.createElement("ul");
  titleRow.className = "w-full flex justify-around items-center";

  const titleRowItems = ["Day", "Weather", "Average", "Low", "High"];

  titleRowItems.forEach((titleRowItem) => {
    const titleRowItemElement = document.createElement("li");
    titleRowItemElement.className = "future-forecast-list-item";
    titleRowItemElement.textContent = titleRowItem;
    titleRow.appendChild(titleRowItemElement);
  });

  daysList.appendChild(titleRow);

  futureDaysForecast.forEach((day) => {
    const daysWeatherInfo = document.createElement("ul");
    daysWeatherInfo.className = "w-full flex justify-around items-center";

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

    daysList.appendChild(daysWeatherInfo);
  });
  futureForecastContent.appendChild(daysList);

  futureForecastDiv.appendChild(futureForecastContent);

  return futureForecastDiv;
};

export default displayFutureDaysForecast;
