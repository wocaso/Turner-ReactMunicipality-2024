import {React, useContext} from 'react'
import { contextDni } from '../../../../context/dniContext/dniContex'
import Swal from 'sweetalert2'
import "./ButtonSeleccionArea.css"
import axios from "axios";

function ButtonSeleccionArea(props) {

  const context = useContext(contextDni)
  const {setnumeroDni} = context;


  function showSweetAlert(tittle,text){
      let Dni = context.numDni
      let Area = props.buttonText

    axios
    .post("http://localhost:8080/api/Agregarturno/"+Dni+"/"+Area+"/", { withCredentials: true })
    .then((response) => {
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

    })
    .catch((error) => {
      console.error("Error al obtener datos del servidor:", error);
    });

  }

  return (
    <div>
        <button className='btn BtnButtonSeleccionArea' onClick={event => showSweetAlert("Exito","Retire su numero por favor.")} id={props.buttonID}>{props.buttonText}</button>
    </div>
  )
}

export default ButtonSeleccionArea