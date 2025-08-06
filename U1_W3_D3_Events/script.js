const inputField = document.getElementById('taskInput');
const addButton = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

function addTask() {
    const taskText = inputField.value;

    if (taskText === '') return;

    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText; 

    textSpan.addEventListener('click', () => {
        listItem.classList.add('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(textSpan);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    inputField.value = '';
}

addButton.addEventListener('click', addTask);

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
