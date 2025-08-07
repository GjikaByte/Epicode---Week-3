const inputField = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

/**
 * Adds a new task to the task list.
 * 
 * - Retrieves the value from the input field.
 * - If the input is not empty, creates a new list item (`li`) with:
 *   - A span containing the task text, which toggles the 'completed' class when clicked.
 *   - An "Edit" button to modify the task text via a prompt.
 *   - A "Delete" button to remove the task from the list.
 * - Appends the new list item to the task list and clears the input field.
 * 
 * @function
 * @returns {void}
 */
function addTask() {
    const taskText = inputField.value;

    if (taskText === '') return;

    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText; 

    textSpan.addEventListener('click', () => {
        listItem.classList.add('completed');
    });

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Modifica';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
        const newTask = prompt('Modifica il task:', textSpan.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            textSpan.textContent = newTask;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    inputField.value = '';
}

addButton.addEventListener('click', addTask);

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});