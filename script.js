const taskTitle = document.getElementById('todo-title');
const taskDescription = document.getElementById('todo-description');
const emptyListMessage = document.querySelector('.empty-list-message');
const list = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.querySelector('.add-button');
    addTaskButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (taskTitle.value != '') {
            createNewItem();
        }
    });
});

function createNewItem() {
    // crear el li
    const liElement = document.createElement('li');
    liElement.classList.add('todo-list-item');
    // crear div.item-main-content
    const itemMainContentDiv = document.createElement('div');
    itemMainContentDiv.classList.add('item-main-content');
    // crear div.item-buttons
    const itemButtonsDiv = document.createElement('div');
    itemButtonsDiv.classList.add('item-buttons');
    // h2
    const h2Element = document.createElement('h2');
    h2Element.innerText = taskTitle.value;
    // p
    const pElement = document.createElement('p');
    pElement.innerText = taskDescription.value;
    // meter h2 y p a div.item-main-content
    itemMainContentDiv.appendChild(h2Element);
    itemMainContentDiv.appendChild(pElement);
    // a
    const aElement = document.createElement('a');
    aElement.classList.add('item-button');
    aElement.addEventListener('click', function() {
        removeItem(this.parentElement.parentElement);
    })
    // img
    const imgElement = document.createElement('img');
    imgElement.src = 'images/trash.png';
    imgElement.alt = 'Icono de tacho de basura';
    imgElement.classList.add('trash-icon');
    // meter img en a
    aElement.appendChild(imgElement);
    // meter a en div.item-buttons
    itemButtonsDiv.appendChild(aElement);
    // armar el ítem
    liElement.appendChild(itemMainContentDiv);
    liElement.appendChild(itemButtonsDiv);
    const emptyListMessage = document.querySelector('.empty-list-message');
    // agregar a la lista
    list.appendChild(liElement);
    // if(!isEmptyList(list)) toggleEmptyListMessageVisibility(emptyListMessage);
    if (!isEmptyList(list)) {
        emptyListMessage.style.display = 'none';
    } else {
        emptyListMessage.style.display = 'block';
    }
    
    // limpiar los inputs
    taskTitle.value = '';
    taskDescription.value = '';
    taskTitle.focus();
}

function removeItem(item) {
    item.remove();
    if (isEmptyList(list)) toggleEmptyListMessageVisibility(emptyListMessage);
}

function isEmptyList(elem) {
    return elem.children.length === 0;
}

function toggleEmptyListMessageVisibility(e) {
    if (e.style.display == 'block') {
        e.style.display = 'none';
    }
    if (e.style.display == 'none') {
        e.style.display = 'block';
    }
}

