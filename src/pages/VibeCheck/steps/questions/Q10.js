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
  const progress = 10;
  const question = "What would you do with 1 million dollars?";
  const options = [
    {
      option: "Travel the world.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Buy a nice house.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Invest it.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Donate to friends, family, and those in need.",
      value: "noEffect",
      weight: 0
    }
  ];

  const nextScreen = () => {
    dispatch({ type: "STEP13" });
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
