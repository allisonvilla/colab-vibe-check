import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Results = () => {
  const { setQuizData, quizData, setUserData, userData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");

  const [description, setDescription] = useState("");

  const [compCollapsed, setCompCollapsed] = useState(true);
  const [convCollapsed, setConvCollapsed] = useState(true);
  const [compatibilityQs, setCompatibilityQs] = useState([]);
  const [conversationQs, setConversationQs] = useState([]);

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

  const handleCompClick = () => {
    setCompCollapsed(!compCollapsed);
  };

  const handleConvClick = () => {
    setConvCollapsed(!convCollapsed);
  };

  return (
    <div className={styles.container}>
      <h2>Your dater type result is:</h2>
      <h1>{userData.daterType}</h1>
      {/* Image goes here */}
      <p className={styles.description}>{description}</p>
      <div>
        <h4 className={styles.questionHeader}>Compatibility Questions</h4>
        <button onClick={handleCompClick}>x</button>
        <ul className={compCollapsed ? styles.collapsed : null}>
          {compatibilityQs.map((item) => (
            <li key={item.key}>
              <p className={styles.question}>{item.question}</p>
              <p className={styles.answer}>{item.answer}</p>
            </li>
          ))}
        </ul>
        <h4 className={styles.questionHeader}>Conversation Starters</h4>
        <button onClick={handleConvClick}>x</button>
        <ul className={convCollapsed ? styles.collapsed : null}>
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
