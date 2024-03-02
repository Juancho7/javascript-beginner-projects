const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const submitButton = document.querySelector('#submit-button');
const todoListView = document.querySelector('#todo-list-view');

const addTodo = () => {
  const newTodo = document.createElement('li');

  const todoText = document.createElement('span');
  todoText.classList.add('todo-text');
  todoText.textContent = todoInput.value;
  newTodo.appendChild(todoText);

  const editTodoButton = document.createElement('button');
  editTodoButton.textContent = '✏️';
  editTodoButton.classList.add('edit-todo');
  newTodo.appendChild(editTodoButton);

  const deleteTodoButton = document.createElement('button');
  deleteTodoButton.textContent = '❌';
  deleteTodoButton.classList.add('delete-todo');
  newTodo.appendChild(deleteTodoButton);

  editTodoButton.addEventListener('click', () => {
    const newTodoText = prompt('Enter new todo');
    todoText.textContent = newTodoText;
  })

  deleteTodoButton.addEventListener('click', () => {
    todoListView.removeChild(newTodo);
  })

  todoListView.appendChild(newTodo);
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo()
  todoInput.value = '';
})