import { UserContext } from "App";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Results = () => {
  const { quizData, userData, setQuizData, setUserData, defaultQuiz } = useContext(UserContext);

  const [compCollapsed, setCompCollapsed] = useState(true);
  const [convCollapsed, setConvCollapsed] = useState(true);
  const [compatibilityQs, setCompatibilityQs] = useState([]);
  const [conversationQs, setConversationQs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const compArr = [];
    const convArr = [];

    for (const q in quizData) {
      if (quizData[q].show === true) {
        if (quizData[q].type !== "noEffect") {
          compArr.push(quizData[q]);
        } else {
          convArr.push(quizData[q]);
        }
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

  const handleRemove = () => {
    setQuizData(defaultQuiz);
    setUserData((prevState) => {
      let newState = { ...prevState };
      newState.daterType = null;
      newState.daterDesc = null;
      newState.showOnProfile = false;
      return newState;
    });
  };

  const images = {
    seriousDater: {
      path: require("assets/results/seriousDater.png"),
      alt: "A man proposing to a woman."
    },
    casualDater: {
      path: require("assets/results/casualDater.png"),
      alt: "A couple sitting on the couch while cheering."
    },
    goWithTheFlow: {
      path: require("assets/results/goWithTheFlow.png"),
      alt: "A couple enjoying a picnic in the sun."
    },
    workingOnMyself: {
      path: require("assets/results/workingOnMyself.png"),
      alt: "A woman sitting on a chair, reading a book."
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

        <img
          src={images[userData.daterType].path}
          alt={images[userData.daterType].alt}
          className={styles.resultImage}
        />

        <p className={styles.description}>{userData.daterDesc}</p>

        <div className={styles.questionSection}>
          <div className={styles.questionHeader}>
            <h4>Compatibility Questions</h4>
            <button
              onClick={() => {
                handleExpand("compatibility");
              }}
            >
              {compCollapsed ? (
                <img src={require("assets/results/plus.png")} alt="Plus icon" />
              ) : (
                <img src={require("assets/results/minus.png")} alt="Minus icon" />
              )}
            </button>
          </div>
          <ul className={compCollapsed ? styles.collapsed : null}>
            {compatibilityQs.length ? (
              compatibilityQs.map((item) => (
                <li key={item.key} className={styles.liNoCheck}>
                  <div className={styles.number}>{compatibilityQs.indexOf(item) + 1}</div>
                  <div className={styles.qa}>
                    <p className={styles.question}>{item.question}</p>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className={styles.noAnswer}>You chose not to share any compatibility answers.</p>
            )}
          </ul>
        </div>

        <div className={styles.questionSection}>
          <div className={styles.questionHeader}>
            <h4>Conversation Starters</h4>
            <button
              onClick={() => {
                handleExpand("conversation");
              }}
            >
              {convCollapsed ? (
                <img src={require("assets/results/plus.png")} alt="Plus icon" />
              ) : (
                <img src={require("assets/results/minus.png")} alt="Minus icon" />
              )}
            </button>
          </div>
          <ul className={convCollapsed ? styles.collapsed : null}>
            {conversationQs.length ? (
              conversationQs.map((item) => (
                <li key={item.key} className={styles.liNoCheck}>
                  <div className={`${styles.numberConv} ${styles.number}`}>
                    {conversationQs.indexOf(item) + 1}
                  </div>
                  <div className={styles.qa}>
                    <p className={styles.question}>{item.question}</p>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className={styles.noAnswer}>You chose not to share any conversation starters.</p>
            )}
          </ul>
        </div>

        <div className={styles.lockedIn}>
          <Link to="/">Back to profile</Link>
          <button
            onClick={() => {
              handleRemove();
              navigate("/");
            }}
          >
            Remove from profile
          </button>
        </div>
      </div>
    );
  }
};

export default Results;
