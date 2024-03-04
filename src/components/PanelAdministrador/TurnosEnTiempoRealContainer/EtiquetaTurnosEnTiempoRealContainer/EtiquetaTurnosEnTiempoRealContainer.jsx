import React from 'react'
import "./EtiquetaTurnosEnTiempoRealContainer.css"

function EtiquetaTurnosEnTiempoRealContainer(props) {
  return (
    <div id="EtiquetaTurnosEnTiempoRealContainerContainer">
        <h1 id={props.color}>{props.text}</h1>
        <div id='EtiquetaTurnosEnTiempoRealContainerCantidadContainer'>
        <h1 id="EtiquetaTurnosEnTiempoRealContainerContainerCantidadTexto">Cantidad:</h1>
        <h1 id={props.color}>{props.numCantidad}</h1>
        </div>
        
    </div>
  )
}

export default EtiquetaTurnosEnTiempoRealContainer