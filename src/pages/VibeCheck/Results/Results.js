import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Results = () => {
  const { setQuizData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");

  useEffect(() => {
    let highestCount = 0;

    console.log(possibleOutcomes);

    for (const type in possibleOutcomes) {
      if (possibleOutcomes[type] > highestCount) {
        highestCount = possibleOutcomes[type];
        setDaterType(
          type.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase())
        );
        //   } else if (possibleOutcomes[type] === highestCount) {
        //     daterType = "Go With The Flow";
      }
    }

    setQuizData((prevState) => {
      let newState = { ...prevState };
      newState.finalType = daterType;
      return newState;
    });
  }, [daterType, possibleOutcomes, setQuizData]);

  return (
    <div className={styles.container}>
      <h1>Your dater type is '{daterType}'!</h1>
    </div>
  );
};

export default Results;
