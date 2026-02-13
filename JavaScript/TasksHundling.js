import { syncDataToDB } from "./DataHundling";
import { InitTasksListners } from "./InitListeners";
import { KEY, TasksListElement } from "./Variables";

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