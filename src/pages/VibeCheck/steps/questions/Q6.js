import React, { useState } from "react";
// import PropTypes from 'prop-types'
import styles from "./styles.module.scss";
import { ReactComponent as ReturnBtn } from "assets/returnBtn.svg";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";
import userData from "userData";
import { VibeQuestionComponent } from "components/VibeQuestionComponent/VibeQuestionComponent";

function Index() {
  const { dispatch } = useVibeCheckContext();
  const [answer, setAnswer] = useState("");
  const progress = 6;
  const question = "Choose one thing you want to have on your bucket list:";
  const options = [
    {
      option: "Learning a specific skill.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Skydiving.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Climbing Mount Everest.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Moving to a favourite city.",
      value: "noEffect",
      weight: 0
    }
  ];

  const nextScreen = () => {
    dispatch({ type: "STEP9" });
  };
  console.log(answer);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <div className={styles.left}>{userData.userName}</div>
          <button className={styles.right} onClick={() => dispatch({ type: "STEP1" })}>
            <ReturnBtn /> Return
          </button>
        </div>
        <div className={styles.age}>{userData.userAge}</div>
        <VibeQuestionComponent
          {...{ progress, question, options, setAnswer, nextScreen, showTextInput: true }}
        />
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;
