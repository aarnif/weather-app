import { format } from "date-fns";

const TODAY = format(new Date(), "yyyy-MM-dd HH:00");

const extract24HourWeatherInfo = (forecast) => {
  let hoursArray = [];
  forecast.forecast.forecastday.map((object) => {
    for (let i = 0; i < 24; ++i) {
      hoursArray.push(object.hour[i]);
    }
  });

  let filteredArray = hoursArray.filter((hour) => {
    return hour.time >= TODAY ? true : false;
  });

  filteredArray[0].time = "Now";

  return filteredArray.slice(0, 24);
};

export default { extract24HourWeatherInfo };
