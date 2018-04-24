// Define UI Variables

const form = document.querySelector('.task-input__form');
const taskInput = document.querySelector('.task-input__task');
const taskBtn = document.querySelector('.task-input__btn');
const filter = document.querySelector('.task-list__filter');
const tasklist = document.querySelector('.task-list__list');
const clearBtn = document.querySelector('.task-list__btn');

// Load all event listeners

loadEventListeners();

function loadEventListeners() {

    // Add task event

    form.addEventListener('submit', addTask);

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

    link.className = 'task-list__list-item-icon';

    // Add icon HTML

    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li

    li.appendChild(link);

    // Append li to ul

    tasklist.appendChild(li);

    // Clear input

    taskInput.value = '';

    e.preventDefault();

}