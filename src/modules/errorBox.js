const errorBox = () => {
  const errorBox = document.createElement("div");
  errorBox.className =
    "relative top-[-150px] box-style p-4 m-4 text-center text-2xl";

  const errorBoxContentOne = document.createElement("p");
  errorBoxContentOne.textContent =
    "Could not find weather data for that location.";
  errorBox.appendChild(errorBoxContentOne);

  const errorBoxContentTwo = document.createElement("p");
  errorBoxContentTwo.textContent = "Please try again.";
  errorBox.appendChild(errorBoxContentTwo);

  return errorBox;
};

export default errorBox;
