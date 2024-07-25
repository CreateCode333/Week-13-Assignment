//Below is the JavaScript code for the assignment
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import { setEventListener } from "./eventlistener";
import { renderTasks } from "./render";

// Below is the code with a Function to fetch tasks from the API
export const fetchTasks = async () => {
  try {
    const response = await fetch('http://localhost:3000/tasks');
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const tasks = await response.json();
    return tasks;
  } catch (error: any) {
    console.error('Error fetching tasks:', error.message);
    return [];
  }
};

export const taskForm = document.getElementById('taskForm') as HTMLFormElement;
export const taskList = document.getElementById('taskList') as HTMLDivElement;



// Initial render of tasks
renderTasks();
setEventListener()

