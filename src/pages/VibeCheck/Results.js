import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";

const Results = () => {
  return (
    <VibeCheckContext.Consumer>
      {({ possibleOutcomes }) => {
        let highestCount = 0;
        let daterType;

        console.log(possibleOutcomes);

        for (const type in possibleOutcomes) {
          if (possibleOutcomes[type] > highestCount) {
            highestCount = possibleOutcomes[type];
            daterType = type;
          }
        }
        console.log(`Highest Count: ${highestCount}`);
        console.log(`Final Dater Type: ${daterType}`);
        return <p>Your dater type is '{daterType}'!</p>;
      }}
    </VibeCheckContext.Consumer>
  );
};

export default Results;
