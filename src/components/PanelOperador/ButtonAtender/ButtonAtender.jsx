import React from 'react'
import "./ButtonAtender.css"

function ButtonAtender(props) {
  return (
    <div>
        <button disabled={props.buttonDisabled} className='btn' id="buttonAtender">
            <img src="/Assets/LogoAuriculares.png" id="imgAtender" alt="" />
        </button>
    </div>
  )
}

export default ButtonAtender