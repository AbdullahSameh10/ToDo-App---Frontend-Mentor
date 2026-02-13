import { syncDataToDB } from "./DataHundling.js";
import { getTasksFromVar, setTasksToVar } from "./TasksHundling.js";
import { KEY } from "./Variables.js";

//------------------- VarsOperations.js ------------------//
export const AddTaskToListVar = (tasksList, newTask) => {
  tasksList.push(newTask);
  setTasksToVar(tasksList);
  syncDataToDB(KEY, getTasksFromVar());
};
export const DeleteTaskFromListVar = (tasksList, index) => {  
  tasksList.splice(index, 1);
  
  setTasksToVar(tasksList);
  syncDataToDB(KEY, getTasksFromVar());
};

//---------------------------------------------------------//
