import { syncDataToDB } from "./DataHundling";
import { getTasksFromVar, setTasksToVar } from "./TasksHundling";
import { KEY } from "./Variables";

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