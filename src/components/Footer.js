import React from "react";

function Footer({ length, listFilter, filter, clearCompleted, clearAll }) {
  //propslarımız alıyoruz.
  //filtereme işlemlerimiz ile sonuç ve temizleme işlemlerimizi yapıyoruz.

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{length} Left</strong>
        </span>
        <ul className="filters">
          <li onClick={() => listFilter("all")}>
            <span className={filter === "all" ? "selected" : null}>All</span>
          </li>
          <li onClick={() => listFilter("active")}>
            <span className={filter === "active" ? "selected" : null}>
              Active
            </span>
          </li>
          <li onClick={() => listFilter("completed")}>
            <span className={filter === "completed" ? "selected" : null}>
              Completed
            </span>
          </li>
        </ul>
        <button
          title="Clear all todos."
          onClick={() => clearAll()}
          className="clear-completed"
        >
          <img src="https://img.icons8.com/officel/26/null/delete-sign.png" />
        </button>
        <button
          title="Clear completed todos."
          onClick={() => clearCompleted()}
          className="clear-completed clear-all"
        >
          <img src="https://img.icons8.com/ios/26/null/delete-property.png" />
        </button>
      </footer>
    </>
  );
}

export default Footer;
