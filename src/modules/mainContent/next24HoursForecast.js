import utils from "../../utils/utils";
import leftArrow from "../icons/arrowLeft.js";
import rightArrow from "../icons/arrowRight.js";

let index = 0;
const howManyHoursIsShown = 12;

const handleLeftArrowClick = (displayUnit, next24HourForecast) => {
  console.log("Left arrow clicked");
  index === 0 ? index : index--;
  updateHoursList(displayUnit, next24HourForecast);
};

const handleRightArrowClick = (displayUnit, next24HourForecast) => {
  console.log("Right arrow clicked");
  index + howManyHoursIsShown === 24 ? index : index++;
  updateHoursList(displayUnit, next24HourForecast);
};

const updateHoursList = (displayUnit, next24HourForecast) => {
  const hoursList = document.getElementById("next-24-hours-forecast");
  const updatedHoursList = createHoursList(displayUnit, next24HourForecast);

  hoursList.innerHTML = "";
  hoursList.appendChild(updatedHoursList);
};

const icon = (iconElement, id, callback) => {
  const iconContainer = document.createElement("div");
  const iconButton = document.createElement("button");
  iconContainer.className = "flex items-center justify-center";
  iconElement.id = id;

  iconElement.addEventListener("click", callback);

  iconButton.appendChild(iconElement);

  iconContainer.appendChild(iconButton);

  return iconContainer;
};

const createHoursList = (displayUnit, next24HourForecast) => {
  const hoursListContainer = document.createElement("div");
  hoursListContainer.className = "hours-list-container";

  const hoursListContent = document.createElement("div");
  hoursListContent.className = "hours-list-content";

  const hoursList = document.createElement("div");
  hoursList.className = "hours-list";

  const leftArrowIcon = icon(leftArrow(), "left-arrow", () =>
    handleLeftArrowClick(displayUnit, next24HourForecast)
  );
  const rightArrowIcon = icon(rightArrow(), "right-arrow", () =>
    handleRightArrowClick(displayUnit, next24HourForecast)
  );

  let hoursArray = utils.sliceArray(
    index,
    next24HourForecast,
    howManyHoursIsShown
  );

  hoursListContent.appendChild(leftArrowIcon);

  hoursArray.forEach((hour) => {
    const singleHour = document.createElement("ul");
    singleHour.className =
      "flex-grow flex flex-col items-center m-2 text-sm sm:text-base xl:text-lg";
    const time = hour.time.split(" ")[1]
      ? hour.time.split(" ")[1]
      : hour.time.split(" ")[0];
    let degree = displayUnit === "Celcius" ? hour.temp_c : hour.temp_f;

    const singleHourItems = [
      time,
      hour.chance_of_rain,
      hour.condition.icon,
      degree,
    ];

    singleHourItems.forEach((item) => {
      const listItem = document.createElement("li");
      if (item === time) {
        listItem.textContent = item;
      } else if (item === hour.condition.icon) {
        const weatherIcon = document.createElement("img");
        weatherIcon.className = "w-8 h-8 sm:w-12 sm:h-12 xl:w-16 xl:h-16";
        weatherIcon.src = item;
        listItem.appendChild(weatherIcon);
      } else if (item === hour.chance_of_rain) {
        listItem.className = "change-or-rain-box ";
        if (item === 0) {
          listItem.textContent = "";
        } else {
          listItem.textContent = item + "%";
        }
      } else {
        listItem.textContent = item + "°";
      }
      singleHour.appendChild(listItem);
    });
    hoursList.appendChild(singleHour);
  });

  hoursListContent.appendChild(hoursList);

  hoursListContent.appendChild(rightArrowIcon);

  hoursListContainer.appendChild(hoursListContent);

  return hoursListContainer;
};

const displayNext24HoursForecast = (displayUnit, next24HourForecast) => {
  const hoursDiv = document.createElement("div");
  hoursDiv.id = "next-24-hours-forecast";
  hoursDiv.className = "animate-emerge-down";
  const hoursList = createHoursList(displayUnit, next24HourForecast);
  hoursDiv.appendChild(hoursList);

  return hoursDiv;
};

export default displayNext24HoursForecast;
