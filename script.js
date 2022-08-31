// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('An error has occured!'))


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const ul = document.querySelector('.todo-list');


todoButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);


    ul.appendChild(todoDiv);

    //////////////////////////////////////////////////////////

    completedButton.addEventListener('click', checkedTodo);

    function checkedTodo() {
        todoDiv.classList.add('completed');
    }

    trashButton.addEventListener('click', removeTodo);

    function removeTodo() {
        todoDiv.remove();
    }

    //////////////////////////////////////////////////////////




}