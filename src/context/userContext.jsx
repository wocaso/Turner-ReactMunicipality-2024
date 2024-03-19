import { useState, createContext } from "react";

const contextSessionUser = createContext();

export default function UserSessionContextProvider({ children }) {
  const [userName, setUserName] = useState(false);

  function setUserSession(numero) {
    setUserName(numero);
  }

  function clearUserSession() {
    setUserName(false);
  }

  return (
    <contextSessionUser.Provider
      value={{
        userName,
        setUserSession,
        clearUserSession,
      }}
    >
      {children}
    </contextSessionUser.Provider>
  );
}

export { contextSessionUser };
