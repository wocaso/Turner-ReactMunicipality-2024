import React from 'react'
import EtiquetaTurnosEnTiempoRealContainer from './EtiquetaTurnosEnTiempoRealContainer/EtiquetaTurnosEnTiempoRealContainer'
import "./TurnosEnTiempoRealContainer.css"

function TurnosEnTiempoRealContainer() {
  return (
    <div id="TurnosEnTiempoRealContainerContainer">
      <h1 id="LabelurnosEnTiempoRealContainerContainer">Reportes</h1>
      <div id="TurnosEnTiempoRealContainerContainerSecc1">
      <EtiquetaTurnosEnTiempoRealContainer numCantidad={0}  text="Turnos en espera" />
      <EtiquetaTurnosEnTiempoRealContainer numCantidad={0} color="Verde" text="Turnos atendidos" />
      </div>
      <div id="TurnosEnTiempoRealContainerContainerSecc2">
      <EtiquetaTurnosEnTiempoRealContainer numCantidad={0} color="Azul" text="Turnos atendiendo" />
      <EtiquetaTurnosEnTiempoRealContainer numCantidad={0} color="Rojo" text="Turnos cancelados" />
      </div>
        
    </div>
  )
}

export default TurnosEnTiempoRealContainer