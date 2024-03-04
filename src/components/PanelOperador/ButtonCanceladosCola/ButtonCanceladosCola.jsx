import React from 'react'
import "./ButtonCanceladosCola.css"

function ButtonCanceladosCola(props) {
  return (
    <div>
        <button className='btn' id="buttonCanceladosCola">{props.buttonText}</button>
    </div>
  )
}

export default ButtonCanceladosCola