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

export default { getCurrentWeather, getAstronomy, getForecast };
