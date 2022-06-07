/* eslint-disable indent */
import Step1 from "./steps/step1/step1";
import Break from "./steps/questions/Break";
import Question from "./steps/questions/Question";
import Results from "./Results/Results";

export function renderView(state) {
  const { view } = state;
  switch (view) {
    case "step1":
    default:
      return <Step1 />;
    case "step2":
      return <Question progress={1} />;
    case "step3":
      return <Question progress={2} />;
    case "step4":
      return <Question progress={3} />;
    case "step5":
      return <Question progress={4} />;
    case "step6":
      return <Question progress={5} />;
    case "step7":
      return <Break />;
    case "step8":
      return <Question progress={6} />;
    case "step9":
      return <Question progress={7} />;
    case "step10":
      return <Question progress={8} />;
    case "step11":
      return <Question progress={9} />;
    case "step12":
      return <Question progress={10} />;
    case "step13":
      return <Results />;
  }
}

export function vibesReducers(state, action) {
  switch (action.type) {
    case vibesType.step1:
      return { view: "step1" };
    case vibesType.step2:
      return { view: "step2" };
    case vibesType.step3:
      return { view: "step3" };
    case vibesType.step4:
      return { view: "step4" };
    case vibesType.step5:
      return { view: "step5" };
    case vibesType.step6:
      return { view: "step6" };
    case vibesType.step7:
      return { view: "step7" };
    case vibesType.step8:
      return { view: "step8" };
    case vibesType.step9:
      return { view: "step9" };
    case vibesType.step10:
      return { view: "step10" };
    case vibesType.step11:
      return { view: "step11" };
    case vibesType.step12:
      return { view: "step12" };
    case vibesType.step13:
      return { view: "step13" };

    default:
      return state;
  }
}

const vibesType = {
  step1: "STEP1",
  step2: "STEP2",
  step3: "STEP3",
  step4: "STEP4",
  step5: "STEP5",
  step6: "STEP6",
  step7: "STEP7",
  step8: "STEP8",
  step9: "STEP9",
  step10: "STEP10",
  step11: "STEP11",
  step12: "STEP12",
  step13: "STEP13"
};
