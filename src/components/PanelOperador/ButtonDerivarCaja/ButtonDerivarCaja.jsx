import React from 'react'
import "./ButtonDerivarCaja.css"

function ButtonDerivarCaja(props) {
  return (
    <div>
        <button disabled={props.disabledBoolean} className='btn' id="btnDerivarCaja">
        <img id="imgButton2" src={props.imgButton2} alt="" />
          <img id="imgButton" src={props.imgButton} alt="" />
          </button>
    </div>
  )
}

export default ButtonDerivarCaja