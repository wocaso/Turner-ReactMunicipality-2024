import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from "react-router-dom";
import TurnosEnTiempoRealContainer from '../TurnosEnTiempoRealContainer/TurnosEnTiempoRealContainer'
import ReportesPorAreaContainer from '../ReportesPorAreaContainer/ReportesPorAreaContainer';

function PanelAdministradorContainer() {
  const { section } = useParams();
  console.log(section)
  return (
    <div>
        <NavBar/>
        {section === "TurnTiempoReal" ? <TurnosEnTiempoRealContainer /> : null}
        {section === "AtendidosPorArea" ? <ReportesPorAreaContainer  labelAtendidosPorText="Atendidos por area" labelFechaAtendidos="en la fecha 13/07/23" /> : null}
        
    </div>
  )
}

export default PanelAdministradorContainer