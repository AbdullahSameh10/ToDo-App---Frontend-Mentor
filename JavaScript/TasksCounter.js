import { TasksLeftLabel, TasksListElement } from "./Variables.js";

//-------------------- TasksCounter.js --------------------//
export const updateTasksLeftCounter = () => {
  const TasksLeftCounter = TasksListElement.querySelectorAll("li:not(.completed)").length;
  TasksLeftLabel.textContent = TasksLeftCounter;
};

//---------------------------------------------------------//
