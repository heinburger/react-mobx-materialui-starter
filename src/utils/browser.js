export const getScreenWidth = () => {
  return window.innerWidth;
};

export const setBodyColor = (color) => {
  document.body.style.background = color;
};

export const navigateTo = (url) => {
  window.open(url);
};
