import React, { useContext, useEffect, useState } from "react";
import ButtonSeleccionArea from "../ButtonSeleccionArea/ButtonSeleccionArea";
import ButtonAtrasSeleccionArea from "../ButtosAtrasSeleccionArea/ButtonAtrasSeleccionArea";
import DniLabel from "../DniLabel/DniLabel";
import { contextDni } from "../../../../context/dniContext/dniContex";
import "./PanelSeleccionAreaContainer.css";
import axios from "axios";

function PanelSeleccionAreaContainer() {
  const context = useContext(contextDni);
  const [data, setData] = useState(null);
  const [columna1, setColumna1] = useState([]);
  const [columna2, setColumna2] = useState([]);
  const [columnaMedia, setColumnaMedia] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tipoDeTurno", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          const arrayNombreArea = response.data.map((obj) => obj.nombreTipoDeTurno);
          setData(arrayNombreArea);
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const newArray1 = [];
      const newArray2 = [];
      let i = 0;

      data.forEach((item) => {
        i++;
        if (i % 2 === 1) {
          newArray1.push(item);
        } else {
          newArray2.push(item);
        }
      });

      setColumna1(newArray1);
      setColumna2(newArray2);

      if (newArray1.length > newArray2.length) {
        setColumnaMedia(newArray1.pop());
      } else {
        setColumnaMedia(null);
      }
    }
  }, [data]);

  return (
    <div id="PanelSeleccionAreaContainerContainerContainer">

      <div id="datosPanelSeleccionAreaContainer">
      <ButtonAtrasSeleccionArea />
      <DniLabel innerText={context.numDni} />
                
                </div>
      <div id="PanelSeleccionAreaContainerContainer">
        <div id="PanelSeleccionAreaColumna1">

          {columna1.map((item, index) => (
            <ButtonSeleccionArea key={index} buttonText={item} />
          ))}
        </div>
        <div id="PanelSeleccionAreaSpacer"></div>
        <div id="PanelSeleccionAreaColumna2">
          {columna2.map((item, index) => (
            <ButtonSeleccionArea key={index} buttonText={item} />
          ))}
        </div>
      </div>
      {columnaMedia && (
        <div id="PanelSeleccionAreaColumnaMedia">
          <ButtonSeleccionArea key={999} buttonText={columnaMedia} />
        </div>
      )}
    </div>
  );
}

export default PanelSeleccionAreaContainer;