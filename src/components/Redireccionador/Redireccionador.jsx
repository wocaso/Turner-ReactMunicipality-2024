import React,{useEffect} from 'react'
import {useNavigate} from "react-router-dom";

function Redireccionador(props) {
    const navigate = useNavigate();
    
  useEffect(() => {
    navigate(props.direccionRed)
  }, []);
  return (
    <div>Redireccionador</div>
  )
}

export default Redireccionador