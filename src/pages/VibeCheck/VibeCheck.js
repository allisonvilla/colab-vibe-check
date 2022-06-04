import React from "react";
import { renderView, vibesReducers } from "./utils";

export const VibeCheckContext = React.createContext();
VibeCheckContext.displayName = "VibeCheckContext";

const initialvalues = {
  seriousDater: 0,
  casualDater: 0,
  goWithTheFlow: 0,
  workingOnMyself: 0,
  noEffect: 0 // this tally is used by questions that do not affect dater type score
};

const Index = () => {
  const { Provider } = VibeCheckContext;
  const [possibleOutcomes, setPossibleOutcomes] = React.useState(initialvalues);
  const [state, dispatch] = React.useReducer(vibesReducers, {
    view: "step1"
  });

  return (
    <Provider value={{ state, dispatch, possibleOutcomes, setPossibleOutcomes }}>
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
