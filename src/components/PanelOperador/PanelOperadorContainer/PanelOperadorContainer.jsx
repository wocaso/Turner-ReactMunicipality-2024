import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PanelOperadorContainer.css";
import DerivarContainer from "../DerivarContainer/DerivarContainer";
import ButtonAbrirCerrar from "../ButtonAbrirCerrar/ButtonAbrirCerrar";
import EtiquetaNomOperador from "../EtiquetaNomOperador/EtiquetaNomOperador";
import ButtonVolver from "../ButtonVolver/ButtonVolver";
import EtiquetaBox from "../EtiquetaBox/EtiquetaBox";
import ButtonLlamar from "../ButtonLlamar/ButtonLlamar";
import ButtonAtender from "../ButtonAtender/ButtonAtender";
import EtiquetaDatosDeTurno from "../EtiquetaDatosDeTurno/EtiquetaDatosDeTurno";
import TurnosCanceladosCola from "../TurnosCanceladosCola/TurnosCanceladosCola";
import axios from "axios";


function PanelOperadorContainer() {
  const { idBox} = useParams();
  const [data, setData] = useState(null);
  const [boxData, setBoxData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userSession", { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
      axios
      .get("http://localhost:8080/api/boxes/boxInd/"+idBox, { withCredentials: true })
      .then((response) => {
        setBoxData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, []);

  let boxes = [
    "Agua",
    "Catastro",
    "Catastro 2",
    "Intendencia",
    "Jueces",
    "Compras",
  ];

  return (
    <div id="PanelOperadorContainerContainer">
      <div id="PanelOperadorContainerContainerSecc1">
        <div>
          <ButtonVolver />
          {boxData && (
          <EtiquetaBox
            numBox={"Box " + boxData.numeroBox}
            tipoBox={boxData.tipoBox}
            estadoSeleccionado="Seleccionado"
          />
        )}
        </div>
        {data && (
          <EtiquetaNomOperador operadorNombre={data[0].nombre+" "+data[0].apellido} />
)}
        <ButtonAbrirCerrar buttonText="Abrir" />
      </div>
      <div id="PanelOperadorContainerContainerSecc2">
        <div id="buttonsLlamarAtenderSpacer"></div>
        <div id="buttonsLlamarAtender">
          <ButtonLlamar />
          <div id="buttonsLlamarAtenderSpacer1"> </div>
          <ButtonAtender />
        </div>

        <DerivarContainer items={boxes} />
      </div>
      <div id="PanelOperadorContainerContainerSecc3">
        <EtiquetaDatosDeTurno dni="40107380" numTurno="24" />
        <TurnosCanceladosCola />
      </div>
    </div>
  );
}

export default PanelOperadorContainer;
