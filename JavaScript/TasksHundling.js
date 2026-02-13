import { syncDataToDB } from "./DataHundling.js";
import { InitTasksListners } from "./InitListeners.js";
import { KEY, TasksListElement } from "./Variables.js";

let tasks = [];

//-------------------- TasksHundling.js -------------------//
export const getTasksFromVar = () => tasks;

export const setTasksToVar = (newTasks) => tasks = newTasks;

export const refreshTasksInVar = () => {
  tasks = [];
  TasksListElement.querySelectorAll("li").forEach((task) => {
    tasks.push({
      value: task.querySelector(".TasksList__taskContent__valueContent__value").textContent,
      IsCompleted: task.classList.contains("completed"),
    });
  });
  setTasksToVar(tasks);
  syncDataToDB(KEY, getTasksFromVar());
  InitTasksListners();
};

//---------------------------------------------------------//
