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
      value: "",
      weight: ""
    },
    {
      option: "Buy a nice house.",
      value: "",
      weight: ""
    },
    {
      option: "Invest it.",
      value: "",
      weight: ""
    },
    {
      option: "Donate to friends, family, and those in need.",
      value: "",
      weight: ""
    }
  ];

  const nextScreen =()=>{
    // dispatch({type:"STEP10"})
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
        <VibeQuestionComponent {...{ progress, question, options, setAnswer, nextScreen, showTextInput:true }} />
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;


