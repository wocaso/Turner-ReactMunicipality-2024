import React, { useState } from "react";
import "./PantallaVistaTurnosHeader.css";
import RelojDigital from "./RelojDigitalHeader/RelojDigitalHeader";

function PantallaVistaTurnosHeader() {
  const [fecha, setFecha] = useState("");
  function actualizarFecha() {
    // Obtiene la fecha actual
    var fechaActual = new Date();

    // Array con los nombres de los meses
    var nombresMeses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    // Obtiene el nombre del mes
    var nombreMes = nombresMeses[fechaActual.getMonth()];

    // Obtiene el día del mes
    var dia = fechaActual.getDate();

    // Formatea la fecha como "NombreMes DD"
    setFecha(dia + " de " + nombreMes);
  }
  if (!fecha) {
    actualizarFecha();
  }
  setInterval(actualizarFecha, 3600);
  return (
    <div id="PantallaVistaTurnosHeaderContainer">
      <div>
        <img
          id="PantallaVistaTurnosHeaderLogo"
          src="./Assets/logo-blanco2.png"
          alt=""
        />
      </div>
      <div id="PantallaVistaTurnosHeaderFecha">{fecha}</div>
      <div id="PantallaVistaTurnosHeaderHora">
        <RelojDigital />
      </div>
    </div>
  );
}

export default PantallaVistaTurnosHeader;
