import { UserContext } from "App";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Results = () => {
  const { quizData, userData } = useContext(UserContext);

  const [compCollapsed, setCompCollapsed] = useState(true);
  const [convCollapsed, setConvCollapsed] = useState(true);
  const [compatibilityQs, setCompatibilityQs] = useState([]);
  const [conversationQs, setConversationQs] = useState([]);

  useEffect(() => {
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
  }, [quizData]);

  const handleExpand = (list) => {
    if (list === "compatibility") {
      setCompCollapsed(!compCollapsed);
    } else if (list === "conversation") {
      setConvCollapsed(!convCollapsed);
    }
  };

  const images = {
    seriousDater: {
      path: require("../../assets/results/seriousDater.png"),
      alt: "fkdsgjfkljgdj"
    },
    casualDater: {
      path: require("../../assets/results/casualDater.png"),
      alt: "some of the things a lot"
    },
    goWithTheFlow: {
      path: require("../../assets/results/goWithTheFlow.png"),
      alt: "picture of people"
    },
    workingOnMyself: {
      path: require("../../assets/results/workingOnMyself.png"),
      alt: "I hate this"
    }
  };

  if (!userData.daterType || !userData.daterDesc) {
    return <Navigate to="/vibecheck" />;
  } else {
    return (
      <div className={styles.container}>
        <h2>Your dater type result is:</h2>
        <h1>
          {userData.daterType
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/^./, (str) => str.toUpperCase())}
        </h1>

        <img src={images[userData.daterType].path} alt={images[userData.daterType].alt} />

        <p className={styles.description}>{userData.daterDesc}</p>
        <div>
          <div className={styles.questionHeader}>
            <h4>Compatibility Questions</h4>
            <button
              onClick={() => {
                handleExpand("compatibility");
              }}
            >
              {compCollapsed ? `+` : `-`}
            </button>
          </div>
          <ul className={compCollapsed ? styles.collapsed : null}>
            {compatibilityQs.map((item) => (
              <li key={item.key}>
                <p className={styles.question}>{item.question}</p>
                <p className={styles.answer}>{item.answer}</p>
              </li>
            ))}
          </ul>
          <div className={styles.questionHeader}>
            <h4>Conversation Starters</h4>
            <button
              onClick={() => {
                handleExpand("conversation");
              }}
            >
              {convCollapsed ? `+` : `-`}
            </button>
          </div>
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
  }
};

export default Results;
