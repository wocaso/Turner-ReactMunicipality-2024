import React from 'react'
import ButtonCanceladosCola from '../ButtonCanceladosCola/ButtonCanceladosCola'
import EtiquetaTurnosEnCola from '../EtiquetaTurnosEnCola/EtiquetaTurnosEnCola'

import "./TurnosCanceladosCola.css"

function TurnosCanceladosCola() {
  return (
    <div id="TurnosCanceladosColaContainer">
        <div id="TurnosCanceladosColaButtons">
        <ButtonCanceladosCola buttonText="Turnos en cola"/>
        <div id="TurnosCanceladosColaSpacer"></div>
        <ButtonCanceladosCola buttonText="Turnos cancelados"/>
        </div>
        <div>
        <EtiquetaTurnosEnCola numTurnos={2}/>
        </div>
        

    </div>
  )
}

export default TurnosCanceladosCola