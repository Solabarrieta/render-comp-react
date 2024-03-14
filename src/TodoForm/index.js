import React from "react";
import './TodoForm.css'


function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = (event) => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Hacer curso de React.js"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--ok">Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }