import { format } from "date-fns";

const TODAY = format(new Date(), "yyyy-MM-dd HH:00");

const extract24HourWeatherInfo = (forecast) => {
  let hoursArray = [];
  forecast.forecast.forecastday.map((object) => {
    for (let i = 0; i < 24; ++i) {
      object.hour[i].condition.icon = "https:" + object.hour[i].condition.icon; // To get the path to work when creating a build
      hoursArray.push(object.hour[i]);
    }
  });

  let filteredArray = hoursArray.filter((hour) => {
    return hour.time >= TODAY ? true : false;
  });

  filteredArray[0].time = "Now";

  return filteredArray.slice(0, 24);
};

const convertToMetersPerSecond = (windspeedKmHour) => {
  return windspeedKmHour * (1000 / 3600);
};

const getWeekday = (date) => {
  return format(date, "EEEE");
};

const sliceArray = (index, array, howMany) => {
  if (array.length < howMany) {
    return array;
  } else {
    return array.slice(index, index + howMany);
  }
};

export default {
  TODAY,
  extract24HourWeatherInfo,
  convertToMetersPerSecond,
  getWeekday,
  sliceArray,
};
