import { useState, createContext } from "react";

const contextDni = createContext();

export default function NumDniContextProvider({ children }) {
  const [numDni, setNumDni] = useState();

  function setnumeroDni(numero) {
    setNumDni(numero);
  }

  function clearnumeroDni() {
    setNumDni(false);
  }

  return (
    <contextDni.Provider
      value={{
        numDni,
        setnumeroDni,
        clearnumeroDni,
      }}
    >
      {children}
    </contextDni.Provider>
  );
}

export { contextDni };
