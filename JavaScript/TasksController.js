import { toggleCheckboxA11y } from "./Accessibility.js";
import { getDataFromDB, syncDataToDB } from "./DataHundling.js";
import { InitTasksListners } from "./InitListeners.js";
import { updateTasksLeftCounter } from "./TasksCounter.js";
import { getTasksFromVar, setTasksToVar } from "./TasksHundling.js";
import { UpdateList } from "./UpdateList.js";
import { addTaskBarCheckbox, KEY, newTaskInput } from "./Variables.js";
import { AddTaskToListVar, DeleteTaskFromListVar } from "./VarsOperations.js";

//------------------- TasksController.js ------------------//
export const CompleteTask = (taskElement, index) => {
  taskElement.classList.toggle("completed");
  
  const checkbox = taskElement.querySelector(".checkbox");
  const isCompleted = taskElement.classList.contains("completed");
  toggleCheckboxA11y(checkbox, !isCompleted);

  
  const allTasks = getDataFromDB(KEY);
  
  allTasks[index].IsCompleted = taskElement.classList.contains("completed");
  
  setTasksToVar(allTasks);
  
  syncDataToDB(KEY, getTasksFromVar());
  
  updateTasksLeftCounter();
};

export const DeleteTask = (index) => {
  DeleteTaskFromListVar(getTasksFromVar(), index);

  UpdateList(getTasksFromVar(KEY));
  updateTasksLeftCounter();
  InitTasksListners();
};

export const AddTask = () => {
  const newTask = {
    value: newTaskInput.value.trim(),
    IsCompleted: addTaskBarCheckbox.classList.contains("active"),
  };

  AddTaskToListVar(getTasksFromVar(), newTask);
  UpdateList(getTasksFromVar(KEY));
  updateTasksLeftCounter();
  InitTasksListners();

  newTaskInput.value = "";
  addTaskBarCheckbox.classList.remove("active");
};

//---------------------------------------------------------//
