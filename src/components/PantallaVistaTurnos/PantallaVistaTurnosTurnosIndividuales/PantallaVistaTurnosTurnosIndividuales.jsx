import React from "react";
import "./PantallaVistaTurnosTurnosIndividuales.css";

function PantallaVistaTurnosTurnosIndividuales(props) {
  return (
    <div id="PantallaVistaTurnosTurnosIndividualesContainer">
      <h1 className="PantallaVistaTurnosTurnosIndividualesText">
        Nº{props.numeroTurno}
      </h1>
      <h1 className="PantallaVistaTurnosTurnosIndividualesText">
        {props.numeroBox}
      </h1>
    </div>
  );
}

export default PantallaVistaTurnosTurnosIndividuales;
