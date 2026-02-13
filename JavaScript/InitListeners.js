//-------------------- InitListners.js --------------------//

import { addTaskBarCheckbox, newTaskInput } from "./Variables.js";
import { CompleteTask, DeleteTask, AddTask} from "./TasksController.js";
import { isKeyboardClick, toggleCheckboxA11y } from "./Accessibility.js";

const toggleAddBarCheckbox = () => {
  const isActive = !addTaskBarCheckbox.classList.contains("active");
  toggleCheckboxA11y(addTaskBarCheckbox, isActive);
};

addTaskBarCheckbox.addEventListener("click", toggleAddBarCheckbox);
addTaskBarCheckbox.addEventListener("keydown", (e) => {
  if (!isKeyboardClick(e)) return;
  e.preventDefault();
  toggleAddBarCheckbox();
});


export const InitAddBarFunctions = (e) => (e.key === "Enter" && newTaskInput.value.trim() !== "") && AddTask();

export const InitTasksListners = () => {

  //============ Get All Checkboxs Of All Tasks ===========//
  const checkboxes = document.querySelectorAll(".checkbox");

  checkboxes.forEach((checkbox, index) => {
    checkbox.onclick = () => CompleteTask(checkbox.parentElement, index);

    checkbox.onkeydown = (e) => {
      if (!isKeyboardClick(e)) return;
      e.preventDefault();
      CompleteTask(checkbox.parentElement, index);
    };

  });
  //=======================================================//

  //========== Get All Delete Icons Of All Tasks ==========//
  const deleteIcons = document.querySelectorAll(".TasksList__taskContent__valueContent__deleteIcon");

  deleteIcons.forEach((deleteIcon, index) => {
    deleteIcon.onclick = () => DeleteTask(index);

    deleteIcon.onkeydown = (e) => {
      if (!isKeyboardClick(e)) return;
      e.preventDefault();
      DeleteTask(index);
    };
  });
  //=======================================================//
};

//---------------------------------------------------------//
