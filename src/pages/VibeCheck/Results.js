import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";

const Results = () => {
  return (
    <VibeCheckContext.Consumer>
      {({ possibleOutcomes }) => {
        for (const type in possibleOutcomes) {
          return (
            <p>
              {type}: {possibleOutcomes[type]}
            </p>
          );
        }
      }}
    </VibeCheckContext.Consumer>
  );
};

export default Results;
