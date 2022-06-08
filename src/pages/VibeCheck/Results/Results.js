import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Results = () => {
  const { setQuizData, quizData, setUserData, userData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const descriptions = {
      seriousDater: `You're looking to form a meaningful romantic connection with someone.`,
      casualDater: `This is a description for casual daters.`,
      goWithTheFlow: `This is a description for go with the flow.`,
      workingOnMyself: `This is a description for working on myself`
    };

    let highestCount = 0;

    console.log(possibleOutcomes);

    for (const type in possibleOutcomes) {
      if (possibleOutcomes[type] > highestCount) {
        highestCount = possibleOutcomes[type];
        setDescription(descriptions[type]);
        setDaterType(
          type.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase())
        );
        //   } else if (possibleOutcomes[type] === highestCount) {
        //     daterType = "Go With The Flow";
      }
    }

    setUserData((prevState) => {
      let newState = { ...prevState };
      newState.daterType = daterType;
      newState.quizComplete = true;
      return newState;
    });
  }, [daterType, possibleOutcomes, setUserData]);

  return (
    <div className={styles.container}>
      <h1>{userData.name}'s Result</h1>
      <h2>{userData.daterType}</h2>
      {/* Image goes here */}
      <p className="description">{description}</p>
    </div>
  );
};

export default Results;
