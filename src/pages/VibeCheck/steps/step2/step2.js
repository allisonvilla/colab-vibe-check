import React from "react";
// import PropTypes from 'prop-types'
import styles from "./styles.module.scss";
import { ReactComponent as ReturnBtn } from "assets/returnBtn.svg";
import { ReactComponent as Background } from "assets/questionBackground.svg";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";

function Step2({ payload }) {
  const { dispatch } = useVibeCheckContext();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerRow}>
          <div className={styles.left}>Onyinye</div>
          <button className={styles.right} onClick={() => dispatch({ type: "STEP1" })}>
            <ReturnBtn /> Return
          </button>
        </div>
        <div className={styles.age}>24</div>

        <div className={styles.bodyWrapper}>
          <Background />
        </div>
      </div>
    </div>
  );
}

Step2.propTypes = {};

export default Step2;
