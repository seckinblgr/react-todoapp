import React, { useState } from "react";

function Header({ addTodoItem }) {
  const [keywords, setKeywords] = useState(""); //girilen değeri tutmak için state tanımı.

  const onSubmit = (e) => {
    //ekleme yapma fonskiyonumuz.
    e.preventDefault();
    addTodoItem(keywords);
    setKeywords("");
  };

  return (
    <header className="header">
      <h1 id="label">todos</h1>
      <form onSubmit={onSubmit}>
        <input
          property="newTodo"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
