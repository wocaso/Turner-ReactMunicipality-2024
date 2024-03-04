import React from 'react'
import "./EtiquetaNomOperador.css"

function EtiquetaNomOperador(props) {
  return (
    <div id="etiquetaNombreOperadorContainer">
        <h1 id="labelOperador">Operador</h1>
        <h1 id="labelNombreOperador">{props.operadorNombre}</h1>
    </div>
  )
}

export default EtiquetaNomOperador