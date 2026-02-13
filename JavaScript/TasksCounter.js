import { TasksLeftLabel, TasksListElement } from "./Variables";

//-------------------- TasksCounter.js --------------------//
export const updateTasksLeftCounter = () => {
  const TasksLeftCounter = TasksListElement.querySelectorAll("li:not(.completed)").length;
  TasksLeftLabel.textContent = TasksLeftCounter;
};
//---------------------------------------------------------//