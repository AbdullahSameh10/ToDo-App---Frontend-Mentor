import { InitDragAndDrop } from "./Drag&Drop";
import { TasksListElement } from "./Variables";

//--------------------- UpdateList.js ---------------------//
export const UpdateList = (tasks) => {
  TasksListElement.innerHTML = "";
  tasks.forEach(task => {
    TasksListElement.innerHTML += `<li class="TasksList__taskContent ${task.IsCompleted && "completed"}" draggable="true">
                                      <div class="checkbox ${task.IsCompleted && "active"}" role="checkbox" tabindex="0" aria-checked="${task.IsCompleted}"></div>
                                      <div class='TasksList__taskContent__valueContent'>
                                        <p class='TasksList__taskContent__valueContent__value'>${task.value}</p>
                                        <img
                                          src="./images/icon-cross.svg"
                                          class="TasksList__taskContent__valueContent__deleteIcon"
                                          alt=""
                                          aria-label="Delete task"
                                          tabindex="0"
                                          role="button"
                                        />

                                      </div>
                                    </li>`;
  });
  InitDragAndDrop();
};
//---------------------------------------------------------//