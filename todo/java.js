// Create a function to execute after the DOM content has been loaded
window.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, input field, and task list container
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // Add an event listener to the form submission
    form.addEventListener('submit', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the task from the input field
        const task = input.value;

        // If the task is empty, do not create a new task
        if (!task.trim()) {
            return;
        }

        // Create task element
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        // Create content element for the task
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        // Append content element to task element
        task_el.appendChild(task_content_el);

        // Create input element to display task text
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        // Append input element to content element
        task_content_el.appendChild(task_input_el);

        // Create actions element for the task
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        // Create edit button for the task
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        // Create delete button for the task
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        // Append edit and delete buttons to actions element
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Append actions element to task element
        task_el.appendChild(task_actions_el);

        // Append task element to the task list container
        list_el.appendChild(task_el);

        // Clear input field after adding task
        input.value = '';

        // Add event listener for editing task
        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        // Add event listener for deleting task
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });

    // Add event listener to prevent form submission when pressing Enter
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});
