import React from "react";
import "./PantallaVistaTurnosMiddleLabel.css";
import PantallaVistaTurnosTurnosIndividuales from "../PantallaVistaTurnosTurnosIndividuales/PantallaVistaTurnosTurnosIndividuales";

function PantallaVistaTurnosMiddleLabel(props) {
  return (
    <div id="PantallaVistaTurnosMiddleLabel">
      <div id="PantallaVistaTurnosMiddleLabelLabel">
        <h1>Turno</h1>
        <h1>BOX</h1>
      </div>
      <div id="PantallaVistaTurnosMiddleLabelBody">
        {props.turnos.map((element) => {
          return (
            <PantallaVistaTurnosTurnosIndividuales
              numeroTurno={element.numeroTurno}
              numeroBox={element.numeroBox}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PantallaVistaTurnosMiddleLabel;
