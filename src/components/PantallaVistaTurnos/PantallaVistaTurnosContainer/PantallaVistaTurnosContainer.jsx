import React from "react";
import "./PantallaVistaTurnosContainer.css";
import PantallaVistaTurnosHeader from "../PantallaVistaTurnosHeader/PantallaVistaTurnosHeader";
import PantallaVistaTurnosMiddleContainer from "../PantallaVistaTurnosMiddleContainer/PantallaVistaTurnosMiddleContainer";

function PantallaVistaTurnosContainer() {
  return (
    <div id="PantallaVistaTurnosContainerContainer">
      <div id="PantallaVistaTurnosHeader">
        <PantallaVistaTurnosHeader />
      </div>
      <div id="PantallaVistaTurnosMiddleBody">
        <PantallaVistaTurnosMiddleContainer />
      </div>
    </div>
  );
}

export default PantallaVistaTurnosContainer;
