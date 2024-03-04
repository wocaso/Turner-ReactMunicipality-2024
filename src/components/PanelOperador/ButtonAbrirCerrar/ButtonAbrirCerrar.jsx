import React from 'react'
import "./ButtonAbrirCerrar.css"

function ButtonAbrirCerrar(props) {
  return (
    <div>
        <button className="btn hover-btn btn-lg" id="buttonAbrirCerrar">{props.buttonText}</button>
    </div>
  )
}

export default ButtonAbrirCerrar

