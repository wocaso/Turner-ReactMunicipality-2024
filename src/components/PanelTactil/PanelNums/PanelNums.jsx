import {React, useState , useContext } from 'react'
import NumButton from '../NumButton/NumButton'
import InputText from '../InputText/InputText'
import ButtonPanelClear from '../ButtonPanelClear/ButtonPanelClear'
import ButtonPanelSig from '../ButtonPanelSig/ButtonPanelSig'
import { contextDni } from '../../../context/dniContext/dniContex'
import "./PanelNums.css"

import Swal from 'sweetalert2'


function PanelNums() {

const context = useContext(contextDni)
const {setnumeroDni} = context;


    const [count, setCount] = useState([]);
    const addNum = num => {
        if(count[8]){
          Swal.fire({
            icon: 'error',
            title: "Error",
            text: "Ingrese un dni valido.",
            timer: 3000,
            showConfirmButton: false,
          }).then(
            clearNum()
          )
        }else{
            setCount(count + num);
        }
        
        
      };

    function clearNum(){
        setCount([])
    }

    function sendContextNumDni(num){
      setnumeroDni(count)
      
    }


  return (
    <div id="PanelNumsContainer">
      <img id="imgPanelNums"src="/Assets/logo-muni5.png" alt="asda" />
        <div id="PanelNumsGrid">
        
            <div>
            <InputText innerText={count}/>
           
            </div>
        <div id="PanelNumsPanelNumerico">
        <div id="PanelNumsFila1">   
             <NumButton handleClick={addNum} innerText="1"/>
             <NumButton handleClick={addNum} innerText="2"/>
             <NumButton handleClick={addNum} innerText="3"/>
        </div>
        <div id="PanelNumsFila2">
             <NumButton handleClick={addNum} innerText="4"/>
             <NumButton handleClick={addNum} innerText="5"/>
             <NumButton handleClick={addNum} innerText="6"/>
        </div>
        <div id="PanelNumsFila3">
         <NumButton handleClick={addNum} innerText="7"/>
         <NumButton handleClick={addNum} innerText="8"/>
         <NumButton handleClick={addNum} innerText="9"/>
        </div>
        </div>

      <div id="confirmClearContainer">
        <ButtonPanelClear innerText="Borrar" handleClick={clearNum} identificador="btnDelete"/>
        {count.length < 7 ? <ButtonPanelSig dis={true}innerText="Siguiente" link="/panelSeleccionArea" handleClick={sendContextNumDni} identificador="btnConfirm"/> : <ButtonPanelSig innerText="Siguiente" link="/panelSeleccionArea" handleClick={sendContextNumDni} identificador="btnConfirm"/> }
        
      </div>
        
        



    </div>
    </div>
    
    

  )
}

export default PanelNums