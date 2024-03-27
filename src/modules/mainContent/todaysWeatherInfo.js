import utils from "../../utils/utils.js";

const displayTodaysWeatherInfo = (displayUnit, todaysWeatherInfo) => {
  const percent = "%";
  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.className = "flex justify-center items-center";

  const weatherInfoContent = document.createElement("div");
  weatherInfoContent.className =
    "flex-grow max-w-[1000px] flex justify-center items-center";

  const weatherInfoList = document.createElement("ul");
  weatherInfoList.className = "w-full";

  const feelDegree =
    displayUnit === "Celcius"
      ? todaysWeatherInfo.temperatureC
      : todaysWeatherInfo.temperatureF;

  const weatherInfoListItems = [
    { SUNRISE: todaysWeatherInfo.sunrise },
    { SUNSET: todaysWeatherInfo.sunset },
    {
      "CHANCE OF RAIN": todaysWeatherInfo.changeOfRain + " " + percent,
    },
    { HUMIDITY: todaysWeatherInfo.humidity + " " + percent },
    {
      WIND: [
        todaysWeatherInfo.windDirection,
        utils.convertToMetersPerSecond(todaysWeatherInfo.windSpeed).toFixed(2) +
          " m/s",
      ],
    },
    { "FEELS LIKE": feelDegree + "°" },
    { PRECAPITATION: todaysWeatherInfo.precapitation + " cm" },
    { PRESSURE: todaysWeatherInfo.pressure + " hPa" },
    { VISIBILITY: todaysWeatherInfo.visibility + " km" },
    { "UV INDEX": todaysWeatherInfo.uvIndex },
  ];

  for (let i = 0; i < weatherInfoListItems.length; i += 2) {
    const weatherInfoRow = document.createElement("li");
    weatherInfoRow.className = "weather-info-row";
    const rowItems = weatherInfoListItems.slice(i, i + 2);

    for (let j = 0; j < 2; ++j) {
      const weatherInfoRowItem = document.createElement("ul");
      weatherInfoRowItem.className =
        "w-full flex flex-col justify-center items-center";
      const listItemHeader = document.createElement("li");
      const listItemValue = document.createElement("li");
      const objectKey = Object.keys(rowItems[j])[0];
      const objectValue = Object.values(rowItems[j])[0];

      if (objectKey === "WIND") {
        listItemHeader.textContent = objectKey;
        listItemValue.textContent = `${objectValue[0]} ${objectValue[1]}`;
      } else {
        listItemHeader.textContent = objectKey;
        listItemValue.textContent = objectValue;
      }

      weatherInfoRowItem.appendChild(listItemHeader);
      weatherInfoRowItem.appendChild(listItemValue);
      weatherInfoRow.appendChild(weatherInfoRowItem);
      weatherInfoList.appendChild(weatherInfoRow);
    }
  }

  weatherInfoContent.appendChild(weatherInfoList);

  weatherInfoContainer.appendChild(weatherInfoContent);
  return weatherInfoContainer;
};

export default displayTodaysWeatherInfo;
