import React from 'react'
import "./ButtonPanelClear.css"

function ButtonPanelClear(props) {

  return (
    <div>
      <button type="button" className="btn" id={props.identificador} onClick={event => props.handleClick()}>
        {props.innerText}
        </button>
        
    </div>
  )
}

export default ButtonPanelClear
