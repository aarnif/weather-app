import dataService from "./services/data.js";

const app = () => {
  const location = "Helsinki";

  dataService
    .getAllWeatherData(location)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default app;
