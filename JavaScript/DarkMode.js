import { isKeyboardClick } from "./Accessibility";
import { getDataFromDB, syncDataToDB } from "./DataHundling";
import { HTML_ELEMENT, toggleThemeBtn } from "./Variables";

//---------------------- DarkMode.js ----------------------//
export const getDeviceType = () => window.innerWidth <= 470 ? "mobile" : "desktop";

const toggleThemeFunc = () => {
  const bgImage = document.querySelector(".bgImage");
  const isDark = HTML_ELEMENT.classList.toggle("dark-theme");
  const device = getDeviceType();

  toggleThemeBtn.src = `./images/icon-${isDark ? "sun" : "moon"}.svg`;
  toggleThemeBtn.setAttribute("aria-pressed", isDark);

  bgImage.src = `./images/bg-mobile-${isDark ? "dark" : "light"}.jpg`;  
  bgImage.height = device === "mobile"? "200px" : "300px";

  syncDataToDB("Dark-Mode", isDark);
};


toggleThemeBtn.addEventListener("keydown", (e) => {
  if (!isKeyboardClick(e)) return;
  e.preventDefault();
  toggleThemeFunc();
  toggleThemeBtn.setAttribute(
    "aria-pressed",
    HTML_ELEMENT.classList.contains("dark-theme")
  );
});

export const toggleMode = () => toggleThemeBtn.onclick = () => toggleThemeFunc();

export const getModeFromDB = () => getDataFromDB("Dark-Mode") && toggleThemeFunc();
//---------------------------------------------------------//