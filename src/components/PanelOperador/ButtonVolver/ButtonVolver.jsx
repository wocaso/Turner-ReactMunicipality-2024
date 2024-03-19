import React from "react";
import "./ButtonVolver.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//-----------------------------------------------------------------------------------------------------------------------------------------------//

function ButtonVolver(props) {
  const navigate = useNavigate();
  function cerrarBox(idRegistro) {
    return axios.put(
      "http://localhost:8080/api/boxes/boxInd/close/" + idRegistro,
      { withCredentials: true }
    );
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------//
  const handleButtonClick = () => {
    cerrarBox(props.idBox);
    navigate("/PanelSeleccionBoxContainer/" + props.areaAnterior);
  };
//-----------------------------------------------------------------------------------------------------------------------------------------------//
  return (
    <div>
      <button
        disabled={props.disabledBoolean}
        onClick={handleButtonClick}
        className="btn hover-btn btn-lg"
        id="btnVolver"
      >
        Volver
      </button>
    </div>
  );
}

export default ButtonVolver;
