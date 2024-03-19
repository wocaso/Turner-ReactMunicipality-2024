import React from 'react'
import "./DerivarContainer.css"
import ButtonDerivar from '../ButtonDerivar/ButtonDerivar'
import ButtonDerivarCaja from '../ButtonDerivarCaja/ButtonDerivarCaja';

function DerivarContainer(props) {
    let i = 0;
  return (
    <div id="DerivarContainerContainer">
      <div id="derivarCajaContainer">
      <ButtonDerivarCaja disabledBoolean={props.disabledBoolean} imgButton2="/Assets/FlechaDerecha.png" imgButton="/Assets/cajaRegistradora.png"/>
      <ButtonDerivarCaja disabledBoolean={props.disabledBoolean} imgButton2="/Assets/sillaRuedas.png" imgButton="/Assets/cajaRegistradora.png"/>
      </div>
      
      <div id="DerivarContainerBoxes">
      {props.items.map((item)=>{
            i++;
            return(<ButtonDerivar disabledBoolean={props.disabledBoolean} key={i} textButton={item}/>)
            
        })}
      </div>
      
        

    </div>
  )
}

export default DerivarContainer