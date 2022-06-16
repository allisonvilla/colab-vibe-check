import React, { useContext } from "react";
// import PropTypes from 'prop-types'
import styles from "./styles.module.scss";
import { ReactComponent as ReturnBtn } from "assets/returnBtn.svg";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { UserContext } from "App";

function Index() {
  const { userData } = useContext(UserContext);
  const { dispatch } = useVibeCheckContext();

  const nextScreen = () => {
    setTimeout(() => {
      dispatch({ type: "STEP8" });
    }, 700);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <div className={styles.left}>{userData.name}</div>
          <button className={styles.right} onClick={() => dispatch({ type: "STEP1" })}>
            <ReturnBtn /> Return
          </button>
        </div>
        <div className={styles.age}>{userData.age}</div>
        <div className={styles.breakScreen}>
          <div>
            Now let's answer some fun questions to help your matches connect with you easier!
          </div>
          <button onClick={nextScreen}>Continue</button>
        </div>
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;
