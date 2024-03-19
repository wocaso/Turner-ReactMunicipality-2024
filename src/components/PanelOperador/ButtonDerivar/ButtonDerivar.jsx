import React from 'react'
import "./ButtonDerivar.css"

function ButtonDerivar(props) {
  return (
    <div>
        <button disabled={props.disabledBoolean} className='btn' id="btnDerivar">{props.textButton}</button>
    </div>
  )
}

export default ButtonDerivar