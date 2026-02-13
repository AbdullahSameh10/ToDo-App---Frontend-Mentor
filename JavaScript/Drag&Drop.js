import { getDataFromDB, syncDataToDB } from "./DataHundling";
import { InitTasksListners } from "./InitListeners";
import { getTasksFromVar, setTasksToVar } from "./TasksHundling";
import { UpdateList } from "./UpdateList";
import { KEY, TasksListElement } from "./Variables";

//---------------------- Drag&Drop.js ---------------------//
const saveSortedDataToDB = () => {
  const SortedList = document.querySelectorAll(".TasksList__taskContent");
  const tasksNames = [...SortedList];
  const sortedTasksList = [];
  tasksNames.forEach((taskName) => {
    sortedTasksList.push({
      'value': taskName.innerText,
      'IsCompleted': taskName.classList.contains("completed"),
    });
  });

  setTasksToVar([...sortedTasksList]);
  syncDataToDB(KEY, getTasksFromVar());
  UpdateList(getDataFromDB(KEY));
  InitTasksListners();
};

export const InitDragAndDrop = () => {
  const DragabbleTasksElements = document.querySelectorAll(".TasksList__taskContent");

  DragabbleTasksElements.forEach((DraggedTask) => {
    DraggedTask.addEventListener("dragstart", () => {
      setTimeout(() => DraggedTask.classList.add("dragged"), 0);
    });
    DraggedTask.addEventListener("dragend", () => {
      DraggedTask.classList.remove("dragged");
      saveSortedDataToDB();
    });
  });

  TasksListElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    
    const DraggedTask = TasksListElement.querySelector(".dragged");
    if (!DraggedTask) return;

    const sibilings = [...TasksListElement.querySelectorAll(".TasksList__taskContent:not(.dragged)")];
    const nextSibiling = sibilings.find((sibiling) => {
      return e.clientY <= sibiling.offsetTop + sibiling.offsetHeight;
    });
    
    TasksListElement.insertBefore(DraggedTask, nextSibiling);
  });
};

//---------------------------------------------------------//