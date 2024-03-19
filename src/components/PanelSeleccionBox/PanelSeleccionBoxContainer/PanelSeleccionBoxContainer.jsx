import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import CerrarSessionButton from "../../CerrarSessionButton/CerrarSessionButton";

function PanelSeleccionBoxContainer() {
//-----------------------------------------------------------------------------------------------------------------------------------------------//
  function seleccionarBox(idRegistro) {
    return axios.put(
      "http://localhost:8080/api/boxes/boxInd/select/" + idRegistro,
      { withCredentials: true }
    );
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------//
  const { area } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
//-----------------------------------------------------------------------------------------------------------------------------------------------//

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/boxes/" + area, { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, []);
//-----------------------------------------------------------------------------------------------------------------------------------------------//
  // Inicializar selectedOption en blanco
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedOption !== "") {
      seleccionarBox(selectedOption)
        .then((response) => {
          console.log("Registro actualizado exitosamente:", response.data);
        })
        .catch((error) => {
          console.error("Error al actualizar el registro:", error);
        });
      navigate("/PanelOperador/" + selectedOption);
    } else {
      alert("Debe seleccionar una opción");
    }
  };
//-----------------------------------------------------------------------------------------------------------------------------------------------//

  return (
    <div id="PanelSeleccionBoxContainerContainer">
      <CerrarSessionButton />
      <h1>Seleccione su BOX</h1>
      <div id="PanelSeleccionBoxInputBox">
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          {/* Opción en blanco */}
          <option value="">Seleccionar...</option>
          {data.map((option) => (
            <option
              key={"BOX " + option.numeroBox + " " + option.tipoBox}
              value={option.idBox}
            >
              {"BOX " + option.numeroBox + " " + option.tipoBox}
            </option>
          ))}
        </select>
        <button onClick={handleButtonClick} className="btn">
          Seleccionar
        </button>
      </div>
    </div>
  );
}

export default PanelSeleccionBoxContainer;
