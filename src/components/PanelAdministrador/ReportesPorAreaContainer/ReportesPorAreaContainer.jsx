import React from 'react'
import "./ReportesPorAreaContainer.css"

function ReportesPorAreaContainer(props) {
  return (
    <div id="ReportesPorAreaContainerContainer">
        <div id="ReportesPorAreaContainerContainerSecc1">
                <h1 className="labelAtendidosText">{props.labelAtendidosPorText}</h1>
                <h1 className="labelAtendidosText" id="labelFechaAtendidosContainer">{props.labelFechaAtendidos}</h1>
        </div>
        <div id="ReportesPorAreaContainerContainerSecc2">
            <div id="ReportesPorAreaContainerContainerSecc2Secc1">
                <h1 className='ReportesPorAreaContainerContainerTextoPequeño'>Seleccionar un rango de fechas.</h1>
            </div>
            <div id="ReportesPorAreaContainerContainerSecc2Fechas">
            <div id="ReportesPorAreaContainerContainerSecc2FechasIndiv">
                <h1 className='ReportesPorAreaContainerContainerTextoMediano'>Desde</h1>
                <input className='ReportesPorAreaContainerContainerSecc2FechasIndivInput' type="date" />
            </div>
            <div id="ReportesPorAreaContainerContainerSecc2FechasIndiv">
            <h1 className='ReportesPorAreaContainerContainerTextoMediano'>Hasta</h1>
                <input className='ReportesPorAreaContainerContainerSecc2FechasIndivInput' type="date" />
            </div>
            </div>
            <button className='btn' id='ReportesPorAreaContainerContainerSecc2Button'>Consultar</button>


        </div>
        <div id='ReportesPorAreaContainerContainerEspaciadorAzul'>

        </div>
        <div id="ReportesPorAreaContainerContainerSecc3">
            <div id="ReportesPorAreaContainerContainerSecc3Secc1">
                <h1 className='ReportesPorAreaContainerContainerTextoPequeño' id='ReportesPorAreaContainerContainerSecc3Secc2Text'>Area</h1>
                <h1 className='ReportesPorAreaContainerContainerTextoPequeño'>Cantidad de turnos atendidos.</h1>
            </div>
            <div id="ReportesPorAreaContainerContainerSecc3Secc2">
                <h1 className="ReportesPorAreaContainerContainerTextoMediano" id='ReportesPorAreaContainerContainerSecc3Secc2Text2'>total:</h1>
                <h1 className="ReportesPorAreaContainerContainerTextoMediano" >0</h1>
            </div>
        </div>
    </div>
  )
}

export default ReportesPorAreaContainer