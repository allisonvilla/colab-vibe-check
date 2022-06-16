import { UserContext } from "App";
import { useContext, useEffect, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import styles from "./styles.module.scss";

const Results = () => {
  const { quizData, userData } = useContext(UserContext);

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
        <p className={styles.instruction}>Add your answers to your profile below!</p>

        <div className={styles.questionSection}>
          <div className={styles.questionHeader}>
            <h4>Compatibility Questions</h4>
            <button
              onClick={() => {
                handleExpand("compatibility");
              }}
            >
              {convCollapsed ? (
                <img src={require("assets/results/plus.png")} alt="Plus icon" />
              ) : (
                <img src={require("assets/results/minus.png")} alt="Minus icon" />
              )}
            </button>
          </div>
          <ul className={compCollapsed ? styles.collapsed : null}>
            {compatibilityQs.map((item) => (
              <li key={item.key}>
                <div className={styles.number}>{compatibilityQs.indexOf(item) + 1}</div>
                <div className={styles.qa}>
                  <p className={styles.question}>{item.question}</p>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </li>
            ))}
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
            {conversationQs.map((item) => (
              <li key={item.key}>
                <div className={styles.number}>{conversationQs.indexOf(item) + 1}</div>
                <div className={styles.qa}>
                  <p className={styles.question}>{item.question}</p>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.addAnswers}>
          <p>Note: Selected answers will be added to profile</p>
          {/* need assets */}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back <HiOutlineChevronDoubleRight />
          </button>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    );
  }
};

export default Results;
