// Function to render tasks to the UI
import {taskList, fetchTasks } from "./main"
type Task = {
    id: number
    title: string
  }
export const renderTasks = async () => {
    taskList.innerHTML = '';
    const tasks: Task[] = await fetchTasks();
    tasks.forEach(task => {
      const taskCard = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${task.title}</h5>
              <button class="btn btn-danger delete-btn" data-id="${task.id}">Delete</button>
            </div>
          </div>
        `;
      taskList.innerHTML += taskCard;
    });
  };