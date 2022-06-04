import React, { useState, useContext } from "react";
// import PropTypes from 'prop-types'
import styles from "./styles.module.scss";
import { ReactComponent as ReturnBtn } from "assets/returnBtn.svg";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { UserContext } from "App";
import { VibeQuestionComponent } from "components/VibeQuestionComponent/VibeQuestionComponent";

function Index() {
  const userContext = useContext(UserContext);
  const { dispatch } = useVibeCheckContext();
  const [answer, setAnswer] = useState("");
  const progress = 1;
  const question = "Which of these options would you prefer for a first date?";
  const options = [
    {
      option: "Going for a walk.",
      value: "goWithTheFlow",
      weight: 1
    },
    {
      option: "Watching a movie.",
      value: "goWithTheFlow",
      weight: 1
    },
    {
      option: "A quick coffee date.",
      value: "workingOnMyself",
      weight: 1
    },
    {
      option: "Going out to a bar.",
      value: "casualDater",
      weight: 1
    }
  ];

  const nextScreen = () => {
    dispatch({ type: "STEP3" });
  };
  console.log(answer);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <div className={styles.left}>{userContext.userData.name}</div>
          <button className={styles.right} onClick={() => dispatch({ type: "STEP1" })}>
            <ReturnBtn /> Return
          </button>
        </div>
        <div className={styles.age}>{userContext.userData.age}</div>
        <VibeQuestionComponent {...{ progress, question, options, setAnswer, nextScreen }} />
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;
