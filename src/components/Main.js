import React from "react";

function Main({ todos, toggleTodoItem, deleteTodoItem }) {
  //map fonksiyonu ile todo itemleri filtreleme ile listeleme işlemleri.
  return (
    <section className="main">
      <input
        property="toggleAll"
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label>Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isComplated ? "completed" : null}>
            <div className="view">
              <input
                property="done"
                className="toggle"
                type="checkbox"
                checked={todo.isComplated}
                onChange={() => toggleTodoItem(todo.id)}
              />
              <label property="text">{todo.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTodoItem(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Main;
