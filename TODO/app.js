const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const formSearch = document.querySelector(".form-search");

const addTodo = (addInput) => {
  if (addInput.length) {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${addInput}">
        <span>${addInput}</span>
        <i class="far fa-trash-alt" data-trash="${addInput}"></i>
        </li>`;

    event.target.reset();
  }
};
formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  const addInput = event.target.add.value.trim();
  addTodo(addInput);
});

const removeTodo = (elementoClicado) => {
  const trashDataValue = elementoClicado.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) {
    todo.remove();
  }
};

const filterTodos = (todos, inputSearch, returnMatchedTodos) => {
  return todos
  .filter((todo) => {
    const matchedTodos = todo.textContent.toLowerCase().includes(inputSearch)
    returnMatchedTodos ? matchedTodos : !matchedTodos
    });
};

const hideTodos = (todos, inputSearch) => {
  filterTodos(todos, inputSearch, false).forEach((todo) => {
    todo.classList.add("hidden");
    todo.classList.remove("d-flex");
  });
};

const showTodos = (todos, inputSearch) => {
  todos
    .filter((todo) => todo.textContent.toLowerCase().includes(inputSearch))
    .forEach((todo) => {
      todo.classList.remove("hidden");
      todo.classList.add("d-flex");
    });
};

todosContainer.addEventListener("click", (event) => {
  const elementoClicado = event.target;
  removeTodo(elementoClicado);
});

formSearch.addEventListener("input", (event) => {
  const todos = Array.from(todosContainer.children);
  const inputSearch = event.target.value.trim();

  hideTodos(todos, inputSearch);
  showTodos(todos, inputSearch);
});

// foco Pablo, foco, um dia chego lá
