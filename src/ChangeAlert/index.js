import React from "react";
import { withStorageListener } from "./withStorageAlert";
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithSotrageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithSotrageListener }