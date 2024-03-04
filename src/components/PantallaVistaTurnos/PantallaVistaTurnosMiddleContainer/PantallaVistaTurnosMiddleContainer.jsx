import React from "react";
import "./PantallaVistaTurnosMiddleContainer.css";
import PantallaVistaTurnosMiddleLabel from "../PantallaVistaTurnosMiddleLabel/PantallaVistaTurnosMiddleLabel";

function PantallaVistaTurnosMiddleContainer() {
  let turnos = [
    { numeroTurno: 44, numeroBox: 1 },
    { numeroTurno: 44, numeroBox: 2 },
    { numeroTurno: 44, numeroBox: 3 },
    { numeroTurno: 44, numeroBox: 4 },
    { numeroTurno: 44, numeroBox: 5 },
    { numeroTurno: 44, numeroBox: 6 },
    { numeroTurno: 44, numeroBox: 7 },
    { numeroTurno: 44, numeroBox: 8 },
  ];
  let turnosA = [];
  let turnosB = [];
  if (turnos.length > 6) {
    turnosA = turnos.slice(0, 6);
    turnosB = turnos.slice(6);
  } else {
    turnosA = turnos;
  }

  return (
    <div id="PantallaVistaTurnosMiddleContainerContainer">
      <div id="PantallaVistaTurnosMiddleLeft">
        <PantallaVistaTurnosMiddleLabel turnos={turnosA} />
      </div>
      <div id="PantallaVistaTurnosMiddleRight">
        <PantallaVistaTurnosMiddleLabel turnos={turnosB} />
      </div>
    </div>
  );
}

export default PantallaVistaTurnosMiddleContainer;
