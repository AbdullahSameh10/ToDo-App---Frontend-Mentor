import { options, TasksListElement } from "./Variables.js";

//------------------- TasksFiltring.js --------------------//
export const filterTasks = () => {
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((option) => option.classList.remove("active"));
      option.classList.add("active");
      if(option.dataset.name === "active"){
        TasksListElement.classList.add("showActive");
        TasksListElement.classList.remove("showCompleted");
      }else if(option.dataset.name === "completed"){
        TasksListElement.classList.add("showCompleted");
        TasksListElement.classList.remove("showActive");
      }else{
        TasksListElement.classList.remove("showActive");
        TasksListElement.classList.remove("showCompleted");
      }
    });
  });
};

//---------------------------------------------------------//
