//------------------- DataHundling.js -------------------//
export const getDataFromDB = (key) => {
  if (key === "Dark-Mode") {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } else {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
};

export const syncDataToDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
//-------------------------------------------------------//