import { clearCompletedTasks } from "./JavaScript/ClearCompleted.js";
import { getDeviceType, getModeFromDB, toggleMode } from "./JavaScript/DarkMode.js";
import { getDataFromDB } from "./JavaScript/DataHundling.js";
import { InitDragAndDrop } from "./JavaScript/Drag&Drop.js";
import { InitAddBarFunctions, InitTasksListners } from "./JavaScript/InitListeners.js";
import { updateTasksLeftCounter } from "./JavaScript/TasksCounter.js";
import { filterTasks } from "./JavaScript/TasksFiltering.js";
import { refreshTasksInVar } from "./JavaScript/TasksHundling.js";
import { UpdateList } from "./JavaScript/UpdateList.js";
import { clearCompletedBtn, HTML_ELEMENT, KEY, TasksListElement } from "./JavaScript/Variables.js";

//----------------------- script.js -----------------------//
const InitBackgroundImage = () => {
  const bgImage = document.querySelector(".bgImage");
  const isDark = HTML_ELEMENT.classList.contains("dark-theme");
  const device = getDeviceType();

  bgImage.src = `./images/bg-${device}-${isDark ? "dark" : "light"}.jpg`;
  bgImage.style.height = device === "mobile"? "195px" : "265px";
};

UpdateList(getDataFromDB(KEY));

InitTasksListners();

getModeFromDB();

toggleMode();

updateTasksLeftCounter();

filterTasks();

refreshTasksInVar();

clearCompletedBtn.addEventListener("click", () => clearCompletedTasks());

document.addEventListener("keyup", (e) => InitAddBarFunctions(e));

InitBackgroundImage();

InitDragAndDrop();

TasksListElement.addEventListener("dragenter", (e) => e.preventDefault());

window.addEventListener("resize", () => InitBackgroundImage());

//---------------------------------------------------------//
