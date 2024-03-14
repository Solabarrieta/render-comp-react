import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { LoadingTodo } from '../Loading';
import { ErrorComponent } from '../Error';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { useTodos } from "./useTodo";

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: "Hacer curso React.js", completed: true },
//   { text: "Hacer curso Optimización LinkedIn", completed: true },
//   { text: "Hacer curso AWS", completed: false },
//   { text: "Hacer curso Docker", completed: false },
//   { text: "Hacer curso de creación de CV", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));


function App() {
  const {
    loading,
    error,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo
  } = useTodos();

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <LoadingTodo />
            <LoadingTodo />
            <LoadingTodo />
          </>
        )}
        {error && <ErrorComponent />}
        {!loading && searchedTodos.length < 1 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal &&
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      }
    </>
  );
}

export default App;
