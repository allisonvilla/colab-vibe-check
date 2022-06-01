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
  const progress = 8;
  const question = "What is your favourite smell?";
  const options = [
    {
      option: "Fire at a campsite.",
      value: "",
      weight: ""
    },
    {
      option: "Summertime rain.",
      value: "",
      weight: ""
    },
    {
      option: "Fresh laundry.",
      value: "",
      weight: ""
    },
    {
      option: "My favourite meal.",
      value: "",
      weight: ""
    }
  ];

  const nextScreen =()=>{
    dispatch({type:"STEP11"})
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


