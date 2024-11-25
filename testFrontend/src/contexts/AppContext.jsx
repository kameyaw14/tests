import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  return (
    <AppContext.Provider value={{ navigate }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
