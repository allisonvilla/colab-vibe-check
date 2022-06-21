import { UserContext } from "App";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import styles from "pages/Results/styles.module.scss";

const ResultsStep = () => {
  const { setUserData, userData, quizData, setQuizData } = useContext(UserContext);
  const { possibleOutcomes } = useContext(VibeCheckContext);

  const [daterType, setDaterType] = useState("");
  const [description, setDescription] = useState("");

  const [compCollapsed, setCompCollapsed] = useState(true);
  const [convCollapsed, setConvCollapsed] = useState(true);
  const [compSelectAll, setCompSelectAll] = useState(false);
  const [convSelectAll, setConvSelectAll] = useState(false);
  const [compatibilityQs, setCompatibilityQs] = useState([]);
  const [conversationQs, setConversationQs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const navigate = useNavigate();

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
        setDaterType(type);
        setDescription(descriptions[type]);
      } else if (possibleOutcomes[type] === highestCount) {
        setDaterType("goWithTheFlow");
      }
    }
  }, [daterType, description, possibleOutcomes]);

  useEffect(() => {
    const compArr = [];
    const convArr = [];

    for (const q in quizData) {
      if (quizData[q].type !== "noEffect") {
        compArr.push(quizData[q]);
      } else {
        convArr.push(quizData[q]);
      }

      if (quizData[q].show) {
        setSelectedAnswers((prevState) => {
          let newState = [...prevState];
          newState.push(quizData[q]);
          return newState;
        });
      }
    }

    setCompatibilityQs(compArr);
    setConversationQs(convArr);
  }, [quizData]);

  useEffect(() => {
    let arr = [];
    compatibilityQs.forEach((q) => {
      if (selectedAnswers.includes(q)) {
        arr.push(q);
      }
    });
    if (arr.length === 5) {
      setCompSelectAll(true);
    } else {
      setCompSelectAll(false);
    }
    arr.splice(0);
  }, [selectedAnswers, compatibilityQs]);

  useEffect(() => {
    let arr = [];
    conversationQs.forEach((q) => {
      if (selectedAnswers.includes(q)) {
        arr.push(q);
      }
    });
    if (arr.length === 5) {
      setConvSelectAll(true);
    } else {
      setConvSelectAll(false);
    }
    arr.splice(0);
  }, [selectedAnswers, conversationQs]);

  const handleExpand = (list) => {
    if (list === "compatibility") {
      setCompCollapsed(!compCollapsed);
    } else if (list === "conversation") {
      setConvCollapsed(!convCollapsed);
    }
  };

  const handleSelect = (ans) => {
    if (selectedAnswers.includes(ans)) {
      setSelectedAnswers((prevState) => {
        let filteredArr = prevState.filter((i) => i !== ans);
        return filteredArr;
      });
    } else {
      setSelectedAnswers((prevState) => {
        let newState = [...prevState];
        newState.push(ans);
        return newState;
      });
    }
  };

  const handleSelectAll = (arr) => {
    arr.forEach((q) => {
      if (!selectedAnswers.includes(q)) {
        setSelectedAnswers((prevState) => {
          let newState = [...prevState];
          newState.push(q);
          return newState;
        });
      }
    });
  };

  const handleUnselectAll = (arr) => {
    arr.forEach((q) => {
      if (selectedAnswers.includes(q)) {
        setSelectedAnswers((prevState) => {
          let filteredArr = prevState.filter((i) => i !== q);
          return filteredArr;
        });
      }
    });
  };

  const saveSelected = () => {
    for (const q in quizData) {
      if (selectedAnswers.includes(quizData[q])) {
        setQuizData((prevState) => {
          let newState = { ...prevState };
          selectedAnswers.forEach((ans) => {
            newState[`q${ans.key}`].show = true;
          });
          return newState;
        });
      } else {
        setQuizData((prevState) => {
          let newState = { ...prevState };
          newState[q].show = false;
          return newState;
        });
      }
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

  if (userData.daterType && userData.daterDesc) {
    return (
      <div className={styles.container}>
        <h2>Your dater type result is:</h2>
        <h1>
          {userData.daterType
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .replace(/^./, (str) => str.toUpperCase())}
        </h1>

        <img
          className={styles.resultImage}
          src={images[userData.daterType].path}
          alt={images[userData.daterType].alt}
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
              {compCollapsed ? (
                <img src={require("assets/results/plus.png")} alt="Plus icon" />
              ) : (
                <img src={require("assets/results/minus.png")} alt="Minus icon" />
              )}
            </button>
          </div>
          <ul className={compCollapsed ? styles.collapsed : null}>
            {compSelectAll ? (
              <button
                onClick={() => {
                  handleUnselectAll(compatibilityQs);
                }}
                className={styles.selectAllBtn}
              >
                Unselect All
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSelectAll(compatibilityQs);
                }}
                className={styles.selectAllBtn}
              >
                Select All
              </button>
            )}
            {compatibilityQs.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    handleSelect(item);
                  }}
                >
                  {selectedAnswers.includes(item) ? (
                    <img
                      src={require("assets/results/checkbox-checked.png")}
                      alt="Checked checkbox"
                    />
                  ) : (
                    <img
                      src={require("assets/results/checkbox-empty.png")}
                      alt="Unchecked checkbox"
                    />
                  )}
                </button>
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
            {convSelectAll ? (
              <button
                onClick={() => {
                  handleUnselectAll(conversationQs);
                }}
                className={styles.selectAllBtn}
              >
                Unselect All
              </button>
            ) : (
              <button
                onClick={() => {
                  handleSelectAll(conversationQs);
                }}
                className={styles.selectAllBtn}
              >
                Select All
              </button>
            )}
            {conversationQs.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => {
                    handleSelect(item);
                  }}
                >
                  {selectedAnswers.includes(item) ? (
                    <img
                      src={require("assets/results/checkbox-checked.png")}
                      alt="Checked checkbox"
                    />
                  ) : (
                    <img
                      src={require("assets/results/checkbox-empty.png")}
                      alt="Unchecked checkbox"
                    />
                  )}
                </button>
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
          <button
            onClick={() => {
              saveSelected();
              navigate("/");
            }}
          >
            Add answers to profile <HiOutlineChevronDoubleRight />
          </button>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ResultsStep;
