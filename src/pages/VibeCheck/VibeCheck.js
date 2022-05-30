import React from "react";
import { renderView, vibesReducers } from "./utils";


export const VibeCheckContext = React.createContext();
VibeCheckContext.displayName = "VibeCheckContext";

const initialvalues = {
  totalScore:0
};

const Index = () => {
  const { Provider } = VibeCheckContext;
  const [values, setValues] = React.useState(initialvalues);
  const [state, dispatch] = React.useReducer(vibesReducers, {
    view: "step1",
    values: initialvalues
  });



  return (
    <Provider value={{ state, dispatch, values, setValues }}>
      <div>{renderView(state)}</div>
    </Provider>
  );
};

export default Index;


export const useVibeCheckContext = () => {
  const context = React.useContext(VibeCheckContext);
  if (!context) {
    throw new Error("useVibeCheckContext must be used within a VibeCheckContext provider");
  }

  return context;
};