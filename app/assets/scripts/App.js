// Define UI Variables

const form = document.querySelector('.task-input__form');
const taskInput = document.querySelector('.task-input__task');
const taskBtn = document.querySelector('.task-input__btn');
const filter = document.querySelector('.task-list__filter');
const taskList = document.querySelector('.task-list__list');
const clearBtn = document.querySelector('.task-list__btn');

// Load all event listeners

loadEventListeners();

function loadEventListeners() {

    // Add task event

    form.addEventListener('submit', addTask);

    // Remove task event

    taskList.addEventListener('click', removeTask)

    // Clear task event

    clearBtn.addEventListener('click', clearTasks)

    // Filter task event

    filter.addEventListener('keyup', filterTasks)

}

// Add Task

function addTask(e) {

    if(taskInput.value === '') {

        alert('Add a task');

    }

    // Create li element

    const li = document.createElement('li');

    // Add class

    li.className = 'task-list__list-item';

    // Create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value));

    // Create new link element

    const link = document.createElement('a');

    // Add class

    link.className = 'task-list__list-item-icon delete-item';

    // Add icon HTML

    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li

    li.appendChild(link);

    // Append li to ul

    taskList.appendChild(li);

    // Clear input

    taskInput.value = '';

    e.preventDefault();

}

// Remove Task

function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you sure you want to delete this task?')) {

            e.target.parentElement.parentElement.remove();

        }

    }

}

// Clear All Tasks

function clearTasks() {

    if(confirm('Are you sure you want to clear all tasks?')) {

        while(taskList.firstChild) {

            taskList.removeChild(taskList.firstChild);

        }

    }

}

// Filter Tasks

function filterTasks(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.task-list__list-item').forEach((task) => {

        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1) {

            task.style.display = 'flex';

        } else {

            task.style.display = 'none';

        }

    });

}