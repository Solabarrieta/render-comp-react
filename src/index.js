import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function App(props) {
//   return (
//     <h1>¡{props.saludo}, {props.nombre}!</h1>
//   )
// }

// function whitSaludo(WrappedComponent) {
//   return function WrappedComponentWithSaludo (saludo) {
//     return function ComponenteDeVerdad(props) {
//       return <>
//         <WrappedComponent {...props} saludo={saludo} />
//         <p>Estamos acompañando al WrappedComponent</p>
//       </>
//     }
//   }
// }

// const AppWithSaludo = whitSaludo(App)('Wenas');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(<App saludo={'Hola'} nombre={'Oier'}/>);
// root.render(<AppWithSaludo saludo="Hola" nombre="Oier"/>);
