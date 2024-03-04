import {React} from 'react'
import "./DniLabel.css"

function DniLabel(props) {
  return (
    <div id="dniLabelTextContainer">
      <h1 id="dniLabelTextText">Su DNI: </h1>
        <h1 id="dniLabelTextText">{props.innerText}</h1>
    </div>
  )
}

export default DniLabel