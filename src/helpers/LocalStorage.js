export const checkLocalStorage = (key, defaultValue) =>
  localStorage.getItem(`${key}`) ? localStorage.getItem(`${key}`) || "" : defaultValue;

export const setInLocalStorage = (key, payload) =>
  localStorage.setItem(`${key}`, payload);