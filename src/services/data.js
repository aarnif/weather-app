import utils from "../utils/utils.js";

const apiKey = process.env.API_KEY;

const getCurrentWeather = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  return data;
};

const getAstronomy = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${location}`
  );
  const data = await response.json();
  return data;
};

const getForecast = async (location) => {
  // Only 3 days of forecast data is available with the free tier
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`
  );
  const data = await response.json();
  return data;
};

const getAllWeatherData = async (location) => {
  const fetchData = await Promise.all([
    getCurrentWeather(location),
    getAstronomy(location),
    getForecast(location),
  ]);

  if (fetchData.some((data) => data.error)) {
    throw new Error("Failed to fetch weather data");
  }

  const [currentWeather, astronomy, forecast] = fetchData;

  const todaysWeatherSummary = {
    location: currentWeather.location.name,
    temperatureC: currentWeather.current.temp_c,
    temperatureF: currentWeather.current.temp_f,
    lowTempC: forecast.forecast.forecastday[0].day.mintemp_c,
    lowTempF: forecast.forecast.forecastday[0].day.mintemp_f,
    highTempC: forecast.forecast.forecastday[0].day.maxtemp_c,
    highTempF: forecast.forecast.forecastday[0].day.maxtemp_f,
    conditionText: currentWeather.current.condition.text,
    conditionIcon: "https:" + currentWeather.current.condition.icon, // To get the path to work when creating a build
  };

  const todaysWeatherInfo = {
    date: currentWeather.current.last_updated,
    sunrise: astronomy.astronomy.astro.sunrise,
    sunset: astronomy.astronomy.astro.sunset,
    temperatureC: currentWeather.current.feelslike_c,
    temperatureF: currentWeather.current.feelslike_f,
    humidity: currentWeather.current.humidity,
    precapitation: currentWeather.current.precip_mm,
    pressure: currentWeather.current.pressure_mb,
    windSpeed: currentWeather.current.wind_kph,
    windDirection: currentWeather.current.wind_dir,
    uvIndex: currentWeather.current.uv,
    visibility: currentWeather.current.vis_km,
    changeOfRain: forecast.forecast.forecastday[0].day.daily_chance_of_rain,
    changeOfSnow: forecast.forecast.forecastday[0].day.daily_chance_of_snow,
  };

  const next24HourForecast = {
    forecast24Hour: utils.extract24HourWeatherInfo(forecast),
  };

  const futureDaysForecast = {
    forecastDays: forecast.forecast.forecastday.map((day) => {
      return {
        date: day.date,
        sunrise: day.astro.sunrise,
        sunset: day.astro.sunset,
        maxTempC: day.day.maxtemp_c,
        maxTempF: day.day.maxtemp_f,
        minTempC: day.day.mintemp_c,
        minTempF: day.day.mintemp_f,
        averageTempC: day.day.avgtemp_c,
        averageTempF: day.day.avgtemp_f,
        conditionText: day.day.condition.text,
        conditionIcon: "https:" + day.day.condition.icon, // To get the path to work when creating a build
        changeOfRain: day.day.daily_chance_of_rain,
        changeOfSnow: day.day.daily_chance_of_snow,
      };
    }),
  };

  return {
    todaysWeatherSummary,
    todaysWeatherInfo,
    next24HourForecast,
    futureDaysForecast,
  };
};

export default {
  getCurrentWeather,
  getAstronomy,
  getForecast,
  getAllWeatherData,
};
