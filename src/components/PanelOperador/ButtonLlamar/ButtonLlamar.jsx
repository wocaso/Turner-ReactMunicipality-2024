import React from 'react'
import "./ButtonLlamar.css"

function ButtonLlamar(props) {
  return (
    <div>
        <button disabled={props.buttonDisabled} className='btn' id="buttonLlamar">
            <img src="/Assets/LogoLlamar.png" id="imgBtnLlamar" alt="" />
        </button>
    </div>
  )
}

export default ButtonLlamar