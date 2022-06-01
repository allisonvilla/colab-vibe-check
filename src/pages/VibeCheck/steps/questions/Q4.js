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
  const progress = 4;
  const question = "What type of goal are you trying to accomplish most right now?";
  const options = [
    {
      option: "Personal Development",
      value: "Working on myself",
      weight: 1
    },
    {
      option: "Relationship",
      value: "Serious Dater",
      weight: 1
    },
    {
      option: "Career or Financial",
      value: "Working on myself",
      weight: 1
    },
    {
      option: "Spiritual or Societal",
      value: "Casual Dater",
      weight: 1
    }
  ];

  const nextScreen =()=>{
    dispatch({type:"STEP6"})
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


