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
  const progress = 9;
  const question = "What superpower would you want to have?";
  const options = [
    {
      option: "Time travel",
      value: "",
      weight: ""
    },
    {
      option: "Super strength",
      value: "",
      weight: ""
    },
    {
      option: "Invisibility",
      value: "",
      weight: ""
    },
    {
      option: "Teleportation",
      value: "",
      weight: ""
    }
  ];

  const nextScreen =()=>{
    dispatch({type:"STEP12"})
  }
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


