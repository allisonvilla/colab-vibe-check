import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Results = () => {
  const { setQuizData, quizData, setUserData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");

  const [description, setDescription] = useState("");
  const [sentence, setSentence] = useState("");
  const [compatibilityQs, setCompatibilityQs] = useState([]);
  const [conversationQs, setConversationQs] = useState([]);

  useEffect(() => {
    const descriptions = {
      seriousDater: `You're looking to form a meaningful romantic connection with someone.`,
      casualDater: `This is a description for casual daters.`,
      goWithTheFlow: `This is a description for go with the flow.`,
      workingOnMyself: `This is a description for working on myself.`
    };

    const results = {
      seriousDater: `You are a serious dater!`,
      casualDater: `You are a casual dater!`,
      goWithTheFlow: `You are a "Go with the flow" dater!`,
      workingOnMyself: `You are working on yourself!`
    };

    let highestCount = 0;

    for (const type in possibleOutcomes) {
      if (possibleOutcomes[type] > highestCount) {
        highestCount = possibleOutcomes[type];
        setDescription(descriptions[type]);
        setSentence(results[type]);
        setDaterType(type);
        //   } else if (possibleOutcomes[type] === highestCount) {
        //     daterType = "Go With The Flow";
      }
    }

    setUserData((prevState) => {
      let newState = { ...prevState };
      newState.daterType = daterType;
      return newState;
    });

    const compArr = [];
    const convArr = [];

    for (const item in quizData) {
      if (quizData[item].type !== "noEffect") {
        compArr.push(quizData[item]);
      } else {
        convArr.push(quizData[item]);
      }
    }

    setCompatibilityQs(compArr);
    setConversationQs(convArr);
  }, [daterType, possibleOutcomes, setUserData, quizData]);

  return (
    <div className={styles.container}>
      <h1>Your Quiz Result</h1>
      <h2>{sentence}</h2>
      {/* Image goes here */}
      <p className={styles.description}>{description}</p>
      <div>
        <ul>
          <h4 className={styles.questionHeader}>Compatibility Questions</h4>
          {compatibilityQs.map((item) => (
            <li key={item.key}>
              <p className={styles.question}>{item.question}</p>
              <p className={styles.answer}>{item.answer}</p>
            </li>
          ))}
        </ul>
        <ul>
          <h4 className={styles.questionHeader}>Conversation Starters</h4>
          {conversationQs.map((item) => (
            <li key={item.key}>
              <p className={styles.question}>{item.question}</p>
              <p className={styles.answer}>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// TODO:
// Way for user to change the 'show' property in quizData
// Fix the tie logic

export default Results;
