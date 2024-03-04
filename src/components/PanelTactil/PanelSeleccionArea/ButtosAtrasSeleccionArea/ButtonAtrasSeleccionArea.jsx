import React,{useContext} from 'react'
import { contextDni } from '../../../../context/dniContext/dniContex'
import { Link} from "react-router-dom";
import "./ButtonAtrasSeleccionArea.css"

function ButtonAtrasSeleccionArea(props) {
const context = useContext(contextDni)
const {clearnumeroDni} = context;

  return (
    <div>
      <Link to="/panelTactil">
      <button className='btn' id="btnAtrasSeleccionArea" onClick={event => clearnumeroDni}>
          <div id="btnAtrasSeleccionAreaInnerButton">
          <img id="FlechaBlancaAtras" src="./Assets/FlechaIzquierda.png" alt="" />
            Atrás
          </div>

            
        </button>
      </Link>

    </div>
  )
}

export default ButtonAtrasSeleccionArea