export const getScreenWidth = () => {
  return window.innerWidth;
};

export const setBodyColor = (color) => {
  document.body.style.background = color;
};

export const navigateTo = (url) => {
  window.open(url);
};

export const capitalize = (string = '') => {
  if (typeof string !== 'string') {
    console.warn(`capitalize: cannot capitalize ${typeof string}`);
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
};
