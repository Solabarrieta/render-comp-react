import "./TodoCounter.css";
import React from "react";

function TodoCounter({ completed, total, loading }) {
  return (
    <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
