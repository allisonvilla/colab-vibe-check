import Step1 from "./steps/step1/step1";
import Step2 from "./steps/step2/step2";

export function renderView(state) {
  const { view, payload } = state;
  switch (view) {
  case "step1":
  default:
    return <Step1 />;
  case "step2":
    return <Step2 {...{ payload }} />;
  }
}

export function vibesReducers(state, action) {
  switch (action.type) {
  case vibesType.step1:
    return { view: "step1" };
  case vibesType.step2:
    return { view: "step2" };

  default:
    return state;
  }
}

const vibesType = {
  step1: "STEP1",
  step2: "STEP2"
};
