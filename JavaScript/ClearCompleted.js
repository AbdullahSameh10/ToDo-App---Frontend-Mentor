import { refreshTasksInVar } from "./TasksHundling";
import { TasksListElement } from "./Variables";

//------------------- ClearCompleted.js -------------------//
export const clearCompletedTasks = () =>{
  const completedTasks = TasksListElement.querySelectorAll(".completed");
  completedTasks.forEach((task) => task.remove());
  refreshTasksInVar();
};
//---------------------------------------------------------//