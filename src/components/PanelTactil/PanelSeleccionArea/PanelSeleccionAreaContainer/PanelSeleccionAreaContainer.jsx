import React, { useContext } from 'react'
import ButtonSeleccionArea from '../ButtonSeleccionArea/ButtonSeleccionArea'
import ButtonAtrasSeleccionArea from '../ButtosAtrasSeleccionArea/ButtonAtrasSeleccionArea';
import DniLabel from '../DniLabel/DniLabel';
import { contextDni } from '../../../../context/dniContext/dniContex';
import "./PanelSeleccionAreaContainer.css"

function PanelSeleccionAreaContainer() {
const context = useContext(contextDni)
    let arrayMedio = null;
let boxes = ["Agua","Catastro", "Catastro 2", "Intendencia","Jueces","Compras","Judiciales"];
let array1 = [];
let array2 = [];


let i = 0;
let dobles = 0;

boxes.map((item)=>{
    
    
    if(dobles === 0){
        array1.push(item)
        dobles++;
    }else{
        array2.push(item);
        dobles--;
    }
    return(array1,array2)
})

if(array1.length > array2.length){
    arrayMedio = array1.pop();
}

  return (
<div id="PanelSeleccionAreaContainerContainerContainer">
<ButtonAtrasSeleccionArea/>
<DniLabel innerText={context.numDni}/>
<div id="PanelSeleccionAreaContainerContainer">

<div id="PanelSeleccionAreaColumna1">
{array1.map((item)=>{
    i++;

    return(<ButtonSeleccionArea key={i} buttonText={item}/>)


        
})}
</div>
<div id="PanelSeleccionAreaSpacer">

</div>
<div id="PanelSeleccionAreaColumna2">
{array2.map((item)=>{
    i++;
    return(<ButtonSeleccionArea key={i} buttonText={item}/>)
    
})}
</div>
</div>
{arrayMedio === null ? null :<div id="PanelSeleccionAreaColumnaMedia">
<ButtonSeleccionArea key={99} buttonText={arrayMedio}/>
</div>}

    </div>
    
   
  )
}

export default PanelSeleccionAreaContainer