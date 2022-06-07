import { useEffect, useRef, useState, useContext } from "react";
import styles from "./styles.module.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { ReactComponent as ValentineSVG } from "assets/valentine.svg";
import { ReactComponent as HeartWithRoses } from "assets/heartwithroses.svg";
import PropTypes from "prop-types";
import { VibeCheckContext } from "pages/VibeCheck/VibeCheck";
import { UserContext } from "App";




export const VibeQuestionComponent = ({
  progress,
  question,
  options,
  setAnswer,
  nextScreen,
  showTextInput = false
}) => {
  const innerDivRef = useRef(null);
  const innerDiv1Ref = useRef(null);
  const innerDiv2Ref = useRef(null);
  const [checkedOption, setCheckedOption] = useState({});
  const [svg, setSvg] = useState("");
  const { setQuizData } = useContext(UserContext);

  //set answer in parent component
  useEffect(() => {
    if (checkedOption.option && checkedOption.option !== "text-input") {
      setTimeout(() => {
        setCheckedOption({});
        nextScreen();
      }, 700);
    }
  }, [checkedOption, nextScreen, setAnswer]);

  useEffect(() => {
    if (innerDivRef.current) {
      innerDiv1Ref.current.style.height = `${innerDivRef.current.clientHeight + 18}px`;
      innerDiv2Ref.current.style.height = `${innerDivRef.current.clientHeight + 34}px`;
    }
    //dynamically set svg icon
    const arr = [<ValentineSVG />, <HeartWithRoses />];
    setSvg(arr[progress % 2]);
  }, [nextScreen, checkedOption, progress]);

  const handleUpdate = (data) => {
    setCheckedOption(data);
  };

  return (
    <VibeCheckContext.Consumer>
      {({ setPossibleOutcomes }) => (
        <div className={styles.bodyWrapper}>
          <div key={progress} className={styles.innerWrapper}>
            <div className={styles.inner} ref={innerDivRef}>
              <div className={styles.header}>
                <div className={styles.progressBar}>
                  <ProgressBar
                    completed={10 * progress}
                    bgColor="#F64900"
                    height="5px"
                    isLabelVisible={false}
                    labelColor="#f3eeee"
                    animateOnRender
                  />
                  <span>{progress}/10</span>
                </div>
                <div>{svg}</div>
              </div>

              <div className={styles.textBody}>
                <div className={styles.question}>{question}</div>
                <div className={styles.options}>
                  {options.map(({ option, value, weight }, idx) => {
                    const name = "vibe-check";
                    const id = option.toLowerCase();
                    return (
                      <div
                        onClick={() => {
                          handleUpdate({ option, value, weight });
                          setPossibleOutcomes((prevScore) => {
                            let newScore = { ...prevScore };
                            newScore[value] = prevScore[value] + weight;
                            return newScore;
                          });
                          setQuizData((prevState) => {
                            let newState = { ...prevState };
                            newState[`q${progress}`] = {
                              question: question,
                              answer: option,
                              type: value
                            };
                            return newState;
                          });
                        }}
                        className={`${styles.singleOption} ${
                          option === checkedOption?.option && styles.active
                        }`}
                        key={option + id + idx}
                      >
                        <input type="radio" {...{ id, value, name }} />
                        <label htmlFor={id}>{option}</label>
                      </div>
                    );
                  })}
                  {showTextInput ? (
                    <div className={styles.other}>
                      <div>Other</div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        onChange={(e) =>
                          handleUpdate({ option: "text-input", value: e.target.value })
                        }
                      />
                      <button
                        onClick={nextScreen}
                        disabled={
                          !(
                            checkedOption?.option === "text-input" &&
                            checkedOption?.value.length > 1
                          )
                        }
                      >
                        Continue
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={styles.inner1} ref={innerDiv1Ref}>
              {[...new Array(4)].map(() => (
                <div className={styles.fakeQuestion} />
              ))}
            </div>
            <div className={styles.inner2} ref={innerDiv2Ref} />
          </div>
        </div>
      )}
    </VibeCheckContext.Consumer>
  );
};

VibeQuestionComponent.propTypes = {
  progress: PropTypes.number,
  question: PropTypes.string,
  options: PropTypes.array.isRequired,
  nextScreen: PropTypes.func.isRequired,
  showTextInput: PropTypes.bool
};
