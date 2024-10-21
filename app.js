const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

//Event Listener for form submission
taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); //Prevent the default form submission

    const task = taskInput.value.trim();


    //Check if the task is not empty
    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        //Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
})