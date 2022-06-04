import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext } from "react";
import styles from "./styles.module.scss";

const Results = () => {
  const { setQuizData } = useContext(UserContext);

  return (
    <VibeCheckContext.Consumer>
      {({ possibleOutcomes }) => {
        let highestCount = 0;
        let daterType;

        console.log(possibleOutcomes);

        for (const type in possibleOutcomes) {
          if (possibleOutcomes[type] > highestCount) {
            highestCount = possibleOutcomes[type];
            daterType = type
              .replace(/([a-z])([A-Z])/g, "$1 $2")
              .replace(/^./, (str) => str.toUpperCase());
            //   } else if (possibleOutcomes[type] === highestCount) {
            //     daterType = "Go With The Flow";
          }
        }

        setQuizData((prevState) => {
          let newState = { ...prevState };
          newState.type = daterType;
          return newState;
        });

        console.log(`Highest Count: ${highestCount}`);
        console.log(`Final Dater Type: ${daterType}`);

        return (
          <div className={styles.container}>
            <h1>Your dater type is '{daterType}'!</h1>
          </div>
        );
      }}
    </VibeCheckContext.Consumer>
  );
};

export default Results;
