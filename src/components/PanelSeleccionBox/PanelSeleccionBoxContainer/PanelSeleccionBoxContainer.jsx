import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function PanelSeleccionBoxContainer() {
    const { area } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get("http://localhost:8080/api/boxes/"+area, { withCredentials: true })
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error al obtener datos del servidor:", error);
          });
      }, []);

    // Inicializar selectedOption en blanco
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    const handleButtonClick = () => {
        if (selectedOption !== "") {
            navigate('/PanelOperador/' + selectedOption);
        } else {
            console.log("Debe seleccionar una opción");
            // Aquí puedes mostrar un mensaje al usuario o manejar el caso en consecuencia
        }
    };

    return (
        <div id='PanelSeleccionBoxContainerContainer'>
            <h1>Seleccione su BOX</h1>
            <div id='PanelSeleccionBoxInputBox'>
                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                    {/* Opción en blanco */}
                    <option value="">Seleccionar...</option>
                    {data.map((option) => (
                        <option key={"BOX " + option.numeroBox + " " + option.tipoBox} value={option.idBox}>{"BOX " + option.numeroBox + " " + option.tipoBox}</option>
                    ))}
                </select>
                <p>Opción seleccionada: {selectedOption}</p>
                <button
                    onClick={handleButtonClick}
                    className="btn"
                >
                    Seleccionar
                </button>
            </div>
        </div>
    )
}

export default PanelSeleccionBoxContainer;