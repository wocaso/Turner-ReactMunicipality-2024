import React, { useState, useEffect } from "react";
import PanelDatosLogin from "../InputDatosLogin/PanelDatosLogin";
import "./PanelLoginContainer.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PanelLoginContainer() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, []);

  //-----------------------------------------------------------------------------------------------------------------------------------
  const [valueFromChild, setValueFromChild] = useState("");
  const handleValueChange = (value) => {
    setValueFromChild(value);
  };
  const handleButtonClick = () => {
    axios
      .get(
        "http://localhost:8080/api/login/" +
          valueFromChild.user +
          "/" +
          valueFromChild.password,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data[0] !== undefined) {
          navigate("/PanelSeleccionBoxContainer/" + res.data[0].area);
        } else {
          alert("Datos Erroneos");
        }
      });
  };

  return (
    <div id="PanelLoginContainerContainerContainer">
      <img id="imgLogin" src="./Assets/logo-gris2.png" alt="" />
      <div id="PanelLoginContainerContainer">
        <div id="PanelLoginContainerTittle">
          <h1>Sistema de turnos</h1>
        </div>
        <h1 id="PanelLoginContainerTextTittle">Iniciar sesion</h1>
        <div id="loginInputsContainer">
          <PanelDatosLogin onValueChange={handleValueChange} />
          <button
            onClick={handleButtonClick}
            className="btn"
            id="btnSiguienteLogin"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PanelLoginContainer;
