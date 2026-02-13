import { clearCompletedTasks } from "./JavaScript/ClearCompleted";
import { getDeviceType, getModeFromDB, toggleMode } from "./JavaScript/DarkMode";
import { getDataFromDB } from "./JavaScript/DataHundling";
import { InitDragAndDrop } from "./JavaScript/Drag&Drop";
import { InitAddBarFunctions, InitTasksListners } from "./JavaScript/InitListeners";
import { updateTasksLeftCounter } from "./JavaScript/TasksCounter";
import { filterTasks } from "./JavaScript/TasksFiltering";
import { refreshTasksInVar } from "./JavaScript/TasksHundling";
import { UpdateList } from "./JavaScript/UpdateList";
import { clearCompletedBtn, HTML_ELEMENT, KEY, TasksListElement } from "./JavaScript/Variables";

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