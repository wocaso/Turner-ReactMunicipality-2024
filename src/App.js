import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PantallaPanelTactil from "./components/PanelTactil/PantallaPanelTactil/PantallaPanelTactil";
import PanelOperadorContainer from "./components/PanelOperador/PanelOperadorContainer/PanelOperadorContainer";
import Footer from "./components/Footer/Footer";
import PanelSeleccionAreaContainer from "./components/PanelTactil/PanelSeleccionArea/PanelSeleccionAreaContainer/PanelSeleccionAreaContainer";
import PanelLoginContainer from "./components/PanelLogin/PanelLoginContainer/PanelLoginContainer";
import PanelAdministradorContainer from "./components/PanelAdministrador/PanelAdministradorContainer/PanelAdministradorContainer";
import PantallaVistaTurnosContainer from "./components/PantallaVistaTurnos/PantallaVistaTurnosContainer/PantallaVistaTurnosContainer";
import PanelSeleccionBoxContainer from "./components/PanelSeleccionBox/PanelSeleccionBoxContainer/PanelSeleccionBoxContainer";

import NumDniContextProvider from "./context/dniContext/dniContex";
import UserSessionContextProvider from "./context/userContext";

function App() {
  return (
    <div className="App">
      <NumDniContextProvider>
        <UserSessionContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/panelTactil" element={<PantallaPanelTactil />} />
              <Route
                path="/panelOperador/:idBox"
                element={<PanelOperadorContainer />}
              />

              <Route
                path="/panelSeleccionArea"
                element={<PanelSeleccionAreaContainer />}
              />

              <Route path="/panelLogin" element={<PanelLoginContainer />} />
              <Route path="/PanelSeleccionBoxContainer/:area" element={<PanelSeleccionBoxContainer
               />} />

              <Route
                path="/panelAdministrador/:section"
                element={<PanelAdministradorContainer />}
              />
              <Route
                path="/pantallaVistaTurnos"
                element={<PantallaVistaTurnosContainer />}
              />
            </Routes>
          </BrowserRouter>
          <Footer />
        </UserSessionContextProvider>
      </NumDniContextProvider>
    </div>
  );
}

export default App;
