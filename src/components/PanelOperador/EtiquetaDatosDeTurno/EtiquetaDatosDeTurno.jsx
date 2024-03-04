import React from 'react'
import "./EtiquetaDatosDeTurno.css"

function EtiquetaDatosDeTurno(props) {
  return (
    <div id='EtiquetaDatosDeTurnoContainerContainer'>
        <div className='EtiquetaDatosDeTurnoContainer'>
        <h1 className='textoEtiquetaDatosDeTurno'>Numero de turno:</h1>
        <h1 className='textoEtiquetaDatosDeTurno'>{props.numTurno}</h1>
        </div>
        <div className='EtiquetaDatosDeTurnoContainer'>
            <h1 className='textoEtiquetaDatosDeTurno'>DNI:</h1>
            <h1 className='textoEtiquetaDatosDeTurno'>{props.dni}</h1>
        </div>
       
    </div>
  )
}

export default EtiquetaDatosDeTurno