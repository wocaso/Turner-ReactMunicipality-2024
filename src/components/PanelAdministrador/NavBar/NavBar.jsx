import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {

let areasHabilitadas = ["Caja","Recursos Fiscales", "Agua y saneamiento","Economia"]
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/panelAdministrador/Inicio">Muni-VCP</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reportes
          </a>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/panelAdministrador/TurnTiempoReal">Turnos en tiempo real</Link></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a className="dropdown-item labelDesplegableNavBar">Sumatoria de turnos atendidos</a></li>
          <li><Link className="dropdown-item" to="/panelAdministrador/AtendidosPorArea">Por area</Link></li>
          <li><a className="dropdown-item" href="#">Por operador</a></li>
          <hr class="dropdown-divider"/>
          <li><a className="dropdown-item labelDesplegableNavBar">Detalle de turnos atendidos</a></li>
            {areasHabilitadas.map(item =>{
                
                return <li><a className="dropdown-item" id={item} href="#">{item}</a></li>
            }
            )}
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Puestos de trabajo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videos en pantalla</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Deshabilitar departamento</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Seguimiento Turnos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar