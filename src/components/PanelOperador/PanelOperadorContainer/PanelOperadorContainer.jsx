import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PanelOperadorContainer.css";
import DerivarContainer from "../DerivarContainer/DerivarContainer";
import EtiquetaNomOperador from "../EtiquetaNomOperador/EtiquetaNomOperador";
import ButtonVolver from "../ButtonVolver/ButtonVolver";
import EtiquetaBox from "../EtiquetaBox/EtiquetaBox";
import ButtonLlamar from "../ButtonLlamar/ButtonLlamar";
import ButtonAtender from "../ButtonAtender/ButtonAtender";
import EtiquetaDatosDeTurno from "../EtiquetaDatosDeTurno/EtiquetaDatosDeTurno";
import TurnosCanceladosCola from "../TurnosCanceladosCola/TurnosCanceladosCola";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//---------------------------------------------------------------------------------------------------------------------------------------------------//
function PanelOperadorContainer() {
  function abrirBox(idRegistro) {
    return axios.put(
      "http://localhost:8080/api/boxes/boxInd/open/" + idRegistro,
      { withCredentials: true }
    );
  }
  function seleccionarBox(idRegistro) {
    return axios.put(
      "http://localhost:8080/api/boxes/boxInd/select/" + idRegistro,
      { withCredentials: true }
    );
  }
//---------------------------------------------------------------------------------------------------------------------------------------------------//
  const { idBox } = useParams();
  const [data, setData] = useState(null);
  const [dataEstadoBox, setDataEstadoBox] = useState("Cerrar");
  const [boxData, setBoxData] = useState(null);
  const navigate = useNavigate();
//---------------------------------------------------------------------------------------------------------------------------------------------------//
  const handleButtonClickAbrir = () => {
    setDataEstadoBox("Abrir");
    console.log(dataEstadoBox);
    abrirBox(idBox);
  };
  const handleButtonClickSeleccionar = () => {
    setDataEstadoBox("Cerrar");
    console.log(dataEstadoBox);
    seleccionarBox(idBox);
  };
//---------------------------------------------------------------------------------------------------------------------------------------------------//
  useEffect(() => {
    axios
      .get("http://localhost:8080/userSession", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setData(response.data);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
    axios
      .get("http://localhost:8080/api/boxes/boxInd/" + idBox, {
        withCredentials: true,
      })
      .then((response) => {
        setBoxData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor:", error);
      });
  }, [dataEstadoBox]);

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
          {boxData &&  (
            
            <ButtonVolver disabledBoolean={dataEstadoBox === "Abrir" ? true : false} idBox={idBox} areaAnterior={boxData.tipoBox} />
          )}

          {boxData && (
            <EtiquetaBox
              numBox={"Box " + boxData.numeroBox}
              tipoBox={boxData.tipoBox}
              estadoSeleccionado={boxData.estado === 1 ? "seleccionado" : "Abierto"}
            />
          )}
        </div>
        {data && (
          <EtiquetaNomOperador
            operadorNombre={data[0].nombre + " " + data[0].apellido}
          />
        )}
        <div>
          {" "}
          {boxData &&
            (boxData.estado === 1 ? (
              <button
                onClick={handleButtonClickAbrir}
                className="btn hover-btn btn-lg"
                id="buttonAbrirCerrar"
              >
                Abrir
              </button>
            ) : (
              <button
                onClick={handleButtonClickSeleccionar}
                className="btn hover-btn btn-lg"
                id="buttonAbrirCerrar"
              >
                Cerrar
              </button>
            ))}
        </div>
      </div>
      <div id="PanelOperadorContainerContainerSecc2">
        <div id="buttonsLlamarAtenderSpacer"></div>
        {dataEstadoBox === "Cerrar" ?         <div id="buttonsLlamarAtender">
        
        <ButtonLlamar buttonDisabled={true} />
        <div id="buttonsLlamarAtenderSpacer1"> </div>
        <ButtonAtender buttonDisabled={true} />
      </div> :         <div id="buttonsLlamarAtender">
        
        <ButtonLlamar buttonDisabled={false} />
        <div id="buttonsLlamarAtenderSpacer1"> </div>
        <ButtonAtender buttonDisabled={false} />
      </div>}
      {dataEstadoBox === "Cerrar" ? <DerivarContainer disabledBoolean={true} items={boxes} />:<DerivarContainer disabledBoolean={false} items={boxes} />}


        
      </div>
      <div id="PanelOperadorContainerContainerSecc3">
        <EtiquetaDatosDeTurno dni="40107380" numTurno="24" />
        <TurnosCanceladosCola />
      </div>
    </div>
  );
}

export default PanelOperadorContainer;
