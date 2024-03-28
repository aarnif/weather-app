import loadingIcon from "./icons/loading";

const loadingBox = () => {
  const loadingBox = document.createElement("div");
  loadingBox.className = "flex justify-center items-center p-4 m-4";
  loadingBox.appendChild(loadingIcon());
  return loadingBox;
};

export default loadingBox;
