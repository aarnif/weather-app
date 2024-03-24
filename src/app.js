import dataService from "./services/data.js";

const app = () => {
  const location = "Helsinki";

  dataService
    .getCurrentWeather(location)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  dataService
    .getAstronomy(location)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  dataService
    .getForecast(location)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default app;
