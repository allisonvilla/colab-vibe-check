import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import Results from "pages/Results/Results";

const ResultsStep = () => {
  const { setUserData, userData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const descriptions = {
      seriousDater: `You're looking to form a meaningful romantic connection with someone.`,
      casualDater: `You're not looking for anything serious, you just want to have some fun.`,
      goWithTheFlow: `You're someone who is open to seeing where things go (open to casual or serious dating depending on the person).`,
      workingOnMyself: `You're someone who prioritizes their own life over dating someone new at the moment.`
    };

    let highestCount = 0;

    for (const type in possibleOutcomes) {
      if (possibleOutcomes[type] > highestCount) {
        highestCount = possibleOutcomes[type];
        setDaterType(type);
        setDescription(descriptions[type]);
      }
      //   } else if (possibleOutcomes[type] === highestCount) {
      //     daterType = "Go With The Flow";
    }

    setUserData((prevState) => {
      let newState = { ...prevState };
      newState.daterType = daterType;
      newState.daterDesc = description;
      return newState;
    });
  }, [daterType, description, possibleOutcomes, setUserData]);

  if (userData.daterType && userData.daterDesc) {
    return <Results />;
  } else {
    return <></>;
  }
};

// TODO:
// Fix the tie logic

export default ResultsStep;
