import React from 'react'
import "./EtiquetaBox.css"

function EtiquetaBox(props) {
  return (
    <div id="EtiquetaTipoBoxContainer">
      <div id="labelTipoBoxContainerContainer">
        <h1 className="textoEtiquetaBox"id="labelNumeroBox">{props.numBox}</h1>
      <h1 className="textoEtiquetaBox" id="labelTipoBox">{props.tipoBox}</h1>
      </div>
        
        <div id="labelTipoBoxContainer">
            <h1 className="textoEtiquetaBox" id="labelEstadoBox">Estado:</h1>
            <h1 className="textoEtiquetaBox" id="labelEstadoBoxActual">{props.estadoSeleccionado}</h1>
        </div>
    </div>
  )
}

export default EtiquetaBox