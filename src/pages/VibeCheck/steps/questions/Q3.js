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
  const progress = 3;
  const question = "What do you need most from a potential partner?";
  const options = [
    {
      option: "Connection and love.",
      value: "Serious Dater",
      weight: 1
    },
    {
      option: "Support and mutual growth.",
      value: "Working on myself",
      weight: 1
    },
    {
      option: "Humour and fun.",
      value: "Casual Dater",
      weight: 1
    },
    {
      option: "Mystery and variety.",
      value: "Go with the flow",
      weight: 1
    }
  ];

  const nextScreen =()=>{
    dispatch({type:"STEP5"})
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
        <VibeQuestionComponent {...{ progress, question, options, setAnswer, nextScreen }} />
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;


