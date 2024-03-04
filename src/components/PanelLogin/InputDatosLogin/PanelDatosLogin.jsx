import React, { useState } from "react";
import "./PanelDatosLogin.css";

function PanelDatosLogin({ onValueChange }) {
  const [dataForm, setDataForm] = useState({
    user: "",
    password: "",
  });

  function inputChangeHander(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    const newDataForm = { ...dataForm, [inputName]: inputValue }; // Actualizar newDataForm directamente aquí
    setDataForm(newDataForm);
    onValueChange(newDataForm); // Pasar newDataForm en lugar de dataForm
  }
  return (
    <div id="PanelDatosLoginContainer">
      <input
        value={dataForm.user}
        onChange={inputChangeHander}
        name="user"
        type="text"
        placeholder="Nombre de usuario"
        required
        className="inputForm"
        id="PanelDatosLoginInputUser"
      />
      <input
        value={dataForm.password}
        onChange={inputChangeHander}
        name="password"
        type="password"
        placeholder="Contraseña"
        required
        className="inputForm"
        id="PanelDatosLoginInputPassword"
      />
    </div>
  );
}

export default PanelDatosLogin;
