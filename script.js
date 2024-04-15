const taskTitle = document.getElementById('todo-title');
const taskDescription = document.getElementById('todo-description');

document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.querySelector('.add-button');
    addTaskButton.addEventListener('click', function(event) {
        event.preventDefault();
        if(taskTitle.value != '' || taskDescription.value != '') {
            createNewItem();
        }
    })
});

function createNewItem() {
    const list = document.querySelector('.todo-list');
    // crear el li
    const liElement = document.createElement('li');
    liElement.classList.add('todo-list-item');
    liElement.addEventListener('click', function() {
        removeItem(this);
    });
    // h2
    const h2Element = document.createElement('h2');
    h2Element.innerText = taskTitle.value;
    // p
    const pElement = document.createElement('p');
    pElement.innerText = taskDescription.value;
    // armar el ítem
    liElement.appendChild(h2Element);
    liElement.appendChild(pElement);
    // agregar a la lista
    list.appendChild(liElement);
    // limpiar los inputs
    taskTitle.value = '';
    taskDescription.value = '';
    
}

function removeItem(elem) {
    elem.remove();
}

