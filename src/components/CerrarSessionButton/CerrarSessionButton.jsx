import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CerrarSessionButton() {
  const navigate = useNavigate();
  function cerrarSession() {
    return axios.get("http://localhost:8080/deleteSession", {
      withCredentials: true,
    });
  }

  const handleButtonClick = () => {
    cerrarSession();
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Cerrar session</button>
    </div>
  );
}

export default CerrarSessionButton;
