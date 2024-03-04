import {React, useContext} from 'react'
import { contextDni } from '../../../../context/dniContext/dniContex'
import Swal from 'sweetalert2'
import "./ButtonSeleccionArea.css"

function ButtonSeleccionArea(props) {

  const context = useContext(contextDni)
  const {setnumeroDni} = context;


  function showSweetAlert(tittle,text){
    //Enviar Datos una vez conectado el end.
    console.log({
      Dni: context.numDni,
      Area: props.buttonText
    })
    Swal.fire({
      icon: 'success',
      title: tittle,
      text: text,
      timer: 2000,
      showConfirmButton: false,
      willClose: () => {

        setnumeroDni(null);
        window.location.replace('/panelTactil')
      }
    })
  }

  return (
    <div>
        <button className='btn BtnButtonSeleccionArea' onClick={event => showSweetAlert("Exito","Retire su numero por favor.")} id={props.buttonID}>{props.buttonText}</button>
    </div>
  )
}

export default ButtonSeleccionArea