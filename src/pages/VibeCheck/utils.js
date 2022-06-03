/* eslint-disable indent */
import Step1 from "./steps/step1/step1";
import Q1 from "./steps/questions/Q1";
import Q2 from "./steps/questions/Q2";
import Q3 from "./steps/questions/Q3";
import Q4 from "./steps/questions/Q4";
import Break from "./steps/questions/Break";
import Q6 from "./steps/questions/Q6";
import Q5 from "./steps/questions/Q5";
import Q7 from "./steps/questions/Q7";
import Q8 from "./steps/questions/Q8";
import Q9 from "./steps/questions/Q9";
import Q10 from "./steps/questions/Q10";
import Results from "./Results/Results";

export function renderView(state) {
  const { view } = state;
  switch (view) {
    case "step1":
    default:
      return <Step1 />;
    case "step2":
      return <Q1 />;
    case "step3":
      return <Q2 />;
    case "step4":
      return <Q3 />;
    case "step5":
      return <Q4 />;
    case "step6":
      return <Q5 />;
    case "step7":
      return <Break />;
    case "step8":
      return <Q6 />;
    case "step9":
      return <Q7 />;
    case "step10":
      return <Q8 />;
    case "step11":
      return <Q9 />;
    case "step12":
      return <Q10 />;
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
