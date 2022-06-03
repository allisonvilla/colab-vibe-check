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
  const progress = 5;
  const question =
    "Assuming you met someone you like here, what would be your next preferred step?";
  const options = [
    {
      option: "Have a video or phone call.",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Keep chatting on the app for some time. ",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Meet them in person. ",
      value: "noEffect",
      weight: 0
    },
    {
      option: "Continue talking on another platform. ",
      value: "noEffect",
      weight: 0
    }
  ];

  const nextScreen = () => {
    dispatch({ type: "STEP7" });
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
        <VibeQuestionComponent {...{ progress, question, options, setAnswer, nextScreen }} />
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;
