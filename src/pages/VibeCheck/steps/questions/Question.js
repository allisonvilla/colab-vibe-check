import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { ReactComponent as ReturnBtn } from "assets/returnBtn.svg";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { UserContext } from "App";
import { VibeQuestionComponent } from "components/VibeQuestionComponent/VibeQuestionComponent";
import questionBank from "./questionBank";

function Index(props) {
  const { userData } = useContext(UserContext);
  const { dispatch } = useVibeCheckContext();
  const { consistent, random } = questionBank;

  const progress = props.progress;

  const nextScreen = () => {
    if (progress <= 5) {
      dispatch({ type: `STEP${progress + 2}` });
    } else {
      dispatch({ type: `STEP${progress + 3}` });
    }
  };

  let question;
  let options;
  let showTextInput;

  if (progress <= 5) {
    question = consistent[`q${progress}`].question;
    options = consistent[`q${progress}`].options;
  } else {
    // TODO: randomize these questions
    question = random[`q${progress}`].question;
    options = random[`q${progress}`].options;
    showTextInput = random[`q${progress}`].showTextInput;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <div className={styles.left}>{userData.name}</div>
          <button className={styles.right} onClick={() => dispatch({ type: `STEP1` })}>
            <ReturnBtn /> Return
          </button>
        </div>
        <div className={styles.age}>{userData.age}</div>
        <VibeQuestionComponent {...{ progress, question, options, nextScreen, showTextInput }} />
      </div>
    </div>
  );
}

Index.propTypes = {
  progress: PropTypes.number
};

export default Index;
