import React from 'react'
import "./EtiquetaTurnosEnCola.css"

function EtiquetaTurnosEnCola(props) {
  return (
    <div id="etiquetaTurnosEnColaContainer">
        <h1 className='textoTurnosEnCola'>
            Turnos en cola:
        </h1>
        <h1 className='textoTurnosEnCola'>
            {props.numTurnos}
        </h1>
        </div>
  )
}

export default EtiquetaTurnosEnCola