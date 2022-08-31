// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(() => console.log('An error has occured!'))


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const ul = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


todoButton.addEventListener("click", addTodo);

function addTodo(event) {
    event.preventDefault();
    if (todoInput.value) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        setTimeout(() => {
            todoInput.value = "";
        }, 0.3)

        saveLocalTodo(todoInput.value);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = "<i class='fas fa-trash'></i>";
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        ul.appendChild(todoDiv);

        function saveLocalTodo(todo) {
            let todoes;
            if (!localStorage.getItem("todoes")) {
                todoes = [];
            } else {
                todoes = JSON.parse(localStorage.getItem("todoes"));
            }
            todoes.push(todo);
            localStorage.setItem("todoes", JSON.stringify(todoes));
        }

        completedButton.addEventListener('click', checkedTodo);

        function checkedTodo() {
            todoDiv.classList.add('completed');
        }

        trashButton.addEventListener('click', removeTodo);

        function removeTodo() {
            removelocalTodo(todoDiv);
            setTimeout(() => {
                todoDiv.remove();
            }, 0.3)
        }

        function removelocalTodo(todo) {
            let todoes;
            if (!localStorage.getItem("todoes")) {
                todoes = [];
            } else {
                todoes = JSON.parse(localStorage.getItem("todoes"));
            }

            const todoIndex = todo.children[0].innerText;
            todoes.splice(todoes.indexOf(todoIndex), 1);
            localStorage.setItem('todoes', JSON.stringify(todoes));
        }

    } else {
        alert('Please add something to do');
    }
}


// ///////////////////////////////////////////////////////////
filterOption.addEventListener("click", filterTodo)

function filterTodo(event) {
    const todoes = ul.childNodes;
    todoes.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    })
}
// ///////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", getTodoes);

function getTodoes() {
    let todoes;
    if (!localStorage.getItem("todoes")) {
        todoes = [];
    } else {
        todoes = JSON.parse(localStorage.getItem("todoes"));
    }

    todoes.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = "<i class='fas fa-check'></i>";
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = "<i class='fas fa-trash'></i>";
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);


        ul.appendChild(todoDiv);

        completedButton.addEventListener('click', checkedTodo);

        function checkedTodo() {
            todoDiv.classList.add('completed');
        }

        trashButton.addEventListener('click', removeTodo);

        function removeTodo() {
            removelocalTodo(todoDiv);

            setTimeout(() => {
                todoDiv.remove();
            }, 0.3)
        }

        function removelocalTodo(todo) {
            let todoes;
            if (!localStorage.getItem("todoes")) {
                todoes = [];
            } else {
                todoes = JSON.parse(localStorage.getItem("todoes"));
            }

            const todoIndex = todo.children[0].innerText;
            todoes.splice(todoes.indexOf(todoIndex), 1);
            localStorage.setItem('todoes', JSON.stringify(todoes));
        }
    })
}

