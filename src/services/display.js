import addMainContent from "../modules/mainContent.js";

const content = document.getElementById("content");

const emptyContent = () => {
  content.innerHTML = "";
};

const updatePage = (data) => {
  emptyContent();
  addMainContent(content, data);
};

export default { updatePage };
