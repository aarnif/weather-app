const displayNext24HoursForecast = (displayUnit, next24HourForecast) => {
  const hoursDiv = document.createElement("div");
  const hoursList = document.createElement("ul");

  next24HourForecast.forEach((hour) => {
    const subList = document.createElement("ul");
    const time = hour.time.split(" ")[1]
      ? hour.time.split(" ")[1]
      : hour.time.split(" ")[0];
    let degree = displayUnit === "Celcius" ? hour.temp_f : hour.temp_c;

    const subListItems = [
      time,
      hour.chance_of_rain,
      hour.condition.icon,
      degree,
    ];

    subListItems.forEach((item) => {
      const listItem = document.createElement("li");
      if (item === time) {
        listItem.textContent = item;
      } else if (item === hour.condition.icon) {
        const weatherIcon = document.createElement("img");
        weatherIcon.src = item;
        listItem.appendChild(weatherIcon);
      } else if (item === hour.chance_of_rain) {
        if (item === 0) {
          listItem.textContent = "";
        } else {
          listItem.textContent = item + "%";
        }
      } else {
        listItem.textContent = item + "°";
      }
      subList.appendChild(listItem);
    });
    hoursList.appendChild(subList);
  });
  hoursDiv.appendChild(hoursList);

  return hoursDiv;
};

export default displayNext24HoursForecast;
