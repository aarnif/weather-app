const errorBox = () => {
  const errorBoxContent = document.createElement("div");
  errorBoxContent.textContent =
    "Could not find weather data for that location. Please try again.";
  return errorBoxContent;
};

export default errorBox;
