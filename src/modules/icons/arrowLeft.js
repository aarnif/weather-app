const arrowLeftIcon = () => {
  const iconContainer = document.createElement("div");
  iconContainer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow-icon arrow-icon-left">
    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>`;
  return iconContainer;
};

export default arrowLeftIcon;
