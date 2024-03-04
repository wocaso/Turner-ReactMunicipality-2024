import React from 'react'
import "./ButtonPanelSig.css"
import { Link} from "react-router-dom";


function ButtonPanelSig(props) {

  return (
    <div>
      <Link to={props.link}> <button disabled={props.dis}type="button" className="btn" id={props.identificador} onClick={event => props.handleClick()}>
        {props.innerText}
        </button> </Link> 
        
    </div>
  )
}

export default ButtonPanelSig
