// Event listener for the task form submission
import { taskForm, taskList } from "./main";
import { renderTasks } from "./render";
export function setEventListener() {


  taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const taskTitle = (document.getElementById('taskTitle') as HTMLInputElement).value;
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: taskTitle })
      });
      if (!response.ok) {
        throw new Error('Failed to add task');
      }
      // Clear input and re-render tasks
      (document.getElementById('taskTitle') as HTMLInputElement).value = '';
      renderTasks();
    } catch (error: any) {
      console.error('Error adding task:', error.message);
    }
  });

  // Event delegation for delete buttons
  taskList.addEventListener('click', async (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('delete-btn')) {
      const taskId = (event.target as HTMLElement).dataset.id;
      try {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Failed to delete task');
        }
        // Re-render tasks after deletion
        renderTasks();
      } catch (error: any) {
        console.error('Error deleting task:', error.message);
      }
    }
  });
}