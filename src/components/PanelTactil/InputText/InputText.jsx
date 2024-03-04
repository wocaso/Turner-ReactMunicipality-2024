import {React} from 'react'
import "./InputText.css"

function InputText(props) {
  return (
    <div id="inputTextTextContainer">
        <h1 id="inputTextTextText">{props.innerText}</h1>
    </div>
  )
}

export default InputText