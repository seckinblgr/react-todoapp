import { useState } from "react"; //gerekli kütüphanelerimizi  ve komponentlerimizi çagırıyoruz.
import { v4 as id } from "uuid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [todos, setTodos] = useState([
    {
      id: id(),
      text: "Kahvaltı yap",
      isComplated: true,
    },
    {
      id: id(),
      text: "Dişlerini fırçala",
      isComplated: false,
    },
    {
      id: id(),
      text: "Bisiklet sür",
      isComplated: false,
    },
  ]); // todolaarı tutmak için bir usestate array oluşturuyoruz.

  const [filter, setFilter] = useState("all");

  // todo ekleme fonksiyonumuz.
  const addTodoItem = (text) => {
    setTodos([
      ...todos,
      {
        id: id(),
        text,
        isComplated: false,
      },
    ]);
  };

  // tamamlanmış todomuzu belirleyecek fonksiyonumuz.
  const toggleTodoItem = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    findTodo.isComplated = !findTodo.isComplated;
    setTodos(todos.map((todo) => (todo.id === id ? findTodo : todo)));
  };

  //todo silme fonksiyonumuz
  const deleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //todoların tamamlanıp tamamlanmadıgını filtreleyen fonksiyonumuz.
  const filteredTodos = todos.filter((todo) => {
    return filter === "active"
      ? !todo.isComplated
      : filter === "completed"
      ? todo.isComplated
      : todo;
  });

  const listFilter = (filter) => setFilter(filter); //bütün todoları listeleme işlemleeri

  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.isComplated)); //tamamlanmış todolaır listeleme işlemleri

  const clearAll = () => setTodos(todos.filter((todo) => (todo.text = null))); //bütün todoları silme işlemi.

  const unCompleted = todos.filter((todo) => !todo.isComplated).length; //tamamlanmış todoları silme işlemi.

  //komponentlerimizde kullancağımız metod ve fonskiyonları props olarak geçiyoruz.
  return (
    <section className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <Main
        todos={filteredTodos}
        toggleTodoItem={toggleTodoItem}
        deleteTodoItem={deleteTodoItem}
      />
      <Footer
        length={unCompleted}
        listFilter={listFilter}
        f
        ilter={filter}
        clearCompleted={clearCompleted}
        clearAll={clearAll}
      />
    </section>
  );
}

export default App;
