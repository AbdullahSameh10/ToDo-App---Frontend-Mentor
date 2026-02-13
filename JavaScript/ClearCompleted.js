import { refreshTasksInVar } from "./TasksHundling.js";
import { TasksListElement } from "./Variables.js";

//------------------- ClearCompleted.js -------------------//
export const clearCompletedTasks = () =>{
  const completedTasks = TasksListElement.querySelectorAll(".completed");
  completedTasks.forEach((task) => task.remove());
  refreshTasksInVar();
};

//---------------------------------------------------------//
