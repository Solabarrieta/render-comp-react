import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({sinchronize}) {
  const { show, toggleShow } = useStorageListener(sinchronize);
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana</p>
          <p>¿Quieres sincronizar los cambios?</p>
          <button
            className="TodoForm-button TodoForm-button--ok"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    )
  } else {
    return null
  }

}

export { ChangeAlert }