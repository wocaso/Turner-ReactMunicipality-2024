import React from 'react'
import "./NumButton.css"

function NumButton(props) {
 let selectedNumber = parseInt(props.innerText)
  return (
    <div >
        <button id="btnNumero"  type="button" className="btn" onClick={event => props.handleClick(selectedNumber)}>{selectedNumber}</button>
    </div>
  )
}

export default NumButton