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
  const progress = 2;
  const question = "What are you looking for most right now?";
  const options = [
    {
      option: "Casual fun, no commitments.",
      value: "Casual Dater",
      weight: 3
    },
    {
      option: "Not actively looking for anything, too busy right now.",
      value: "Working on myself",
      weight: 3
    },
    {
      option: "Open to meeting people and seeing where things go!",
      value: "Go with the flow",
      weight: 3
    },
    {
      option: "Forming a meaningful romantic connection.",
      value: "Serious Dater",
      weight: 3
    }
  ];

  const nextScreen =()=>{
    dispatch({type:"STEP4"})
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


