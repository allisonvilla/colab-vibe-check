import React from "react";
import styles from "./styles.module.scss";
// import PropTypes from "prop-types";
import { ReactComponent as Vector } from "assets/vector.svg";
import { ReactComponent as MaleFaceCard } from "assets/maleFaceCard.svg";
import { ReactComponent as FemaleFaceCard } from "assets/femaleFaceCard.svg";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { useVibeCheckContext } from "pages/VibeCheck/VibeCheck";

function Step1(props) {
  const { dispatch } = useVibeCheckContext();

  const handleNext = () => dispatch({ type: "STEP2" });

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.backgroungRect} />
        <div className={styles.splashImg}>
          <div className={styles.vectorWrapper}>
            <Vector />
            <div className={styles.imgwrap}>
              <FemaleFaceCard className={styles.svgFemale} />
              <MaleFaceCard className={styles.svgMale} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.header}>
          <p>VibeCheck</p>
        </div>
        <div className={styles.desc}>
          <p>
            Answer the following questions to learn about your unique dater type. Your result can
            help your matches do a vibe check to see if you&#39;re a good match!
          </p>
        </div>
        <button onClick={handleNext} className={styles.linkBtn}>
          Let&#39;s Go! <HiOutlineChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}

Step1.propTypes = {};

export default Step1;
