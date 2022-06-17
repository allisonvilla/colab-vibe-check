/* eslint-disable indent */
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactComponent as BackArrow } from "assets/backArrow.svg";
import { ReactComponent as Flag } from "assets/flag.svg";
import { ReactComponent as X } from "assets/cancel.svg";
import { ReactComponent as Vector } from "assets/vector2.svg";
import { ReactComponent as Lock } from "assets/lock.svg";
import { ReactComponent as Send } from "assets/send.svg";
import { UserContext } from "App";

function Index() {
  const { state } = useLocation();
  const { userData } = useContext(UserContext);
  const { imgsrc, name, status } = state;
  const [initialAns, setInitialAns] = useState(undefined);
  const [msgsArr, setMsgArr] = useState([]);
  const [chatMsg, setChatMsg] = useState("");
  const inputRef = React.useRef();

  const initialQuestion = `${userData.name}, who would you prefer to have as a dinner guest?`;
  const options = [
    {
      option: "Beyonce"
    },
    {
      option: "Barack Obama"
    },
    {
      option: "Albert Einstein"
    },
    {
      option: "Michael Jackson"
    }
  ];

  React.useEffect(() => {
    inputRef.current && inputRef.current.focus();
  });

  const setValue = (chatMsg) => {
    if (chatMsg.trim().length > 1) {
      setMsgArr((val) => [...val, chatMsg]);
      setChatMsg("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topWrapper}>
          <Link to="/matches">
            <BackArrow />
          </Link>
          <img src={imgsrc} alt="profile-pic" className={styles.imgThumbnail} />
          <div className={styles.nameOnlineStatus}>
            <p className={styles.name}>{name}</p>
            <p className={status.toLowerCase() === "active" ? styles.online : styles.offline}>
              {status}
            </p>
          </div>
          <Flag className={styles.flagsvg} />
        </div>
      </div>
      {!initialAns ? (
        <ConversationStarter {...{ initialQuestion, options, imgsrc, name, setInitialAns }} />
      ) : (
        <ConversationChat {...{ initialAns, name, msgsArr }} />
      )}
      <div className={styles.chatbox}>
        <input
          type="text"
          placeholder="Write something..."
          onChange={(e) => setChatMsg(e.target.value)}
          value={chatMsg}
          readOnly={!initialAns}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() === "enter") {
              setValue(chatMsg);
            }
          }}
        />
        <button
          type="submit"
          onClick={() => {
            setValue(chatMsg);
          }}
        >
          <Send />
        </button>
      </div>
    </div>
  );
}
export default Index;

const ConversationStarter = ({ initialQuestion, options, imgsrc, name, setInitialAns }) => {
  return (
    <div className={styles.body}>
      <div className={styles.vibeCheck}>
        <Vector className={styles.vector} />
        <div className={styles.header}>
          Vibe Check
          <button>
            <X />
          </button>
        </div>
        <div className={styles.question}>{initialQuestion}</div>
        {options.map(({ option }, i) => {
          return (
            <div key={option + i} className={styles.option} onClick={() => setInitialAns(option)}>
              <label htmlFor={option}>
                <input hidden type="radio" name={initialQuestion} id={option} />
                {option}
              </label>
            </div>
          );
        })}
        <div className={styles.lockedAnswer}>
          <img src={imgsrc} alt="profile-pic" className={styles.imgThumbnail} />
          <div className={styles.nameLock}>
            <span>{name}&apos;s answer </span>
            <Lock />
          </div>
        </div>
      </div>
    </div>
  );
};

const ConversationChat = ({ initialAns, name, msgsArr }) => {
  const [seen, setSeen] = React.useState("");
  const [showNextMsg, setShowNextMsg] = React.useState("");
  const chatRef = React.useRef();

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.focus();
    }
    setTimeout(() => {
      setSeen("seen");
      setTimeout(() => setShowNextMsg(true), 1000);
    }, 1500);
  }, [msgsArr]);

  return (
    <div className={styles.coversationChat}>
      <div className={styles.snippetHeader}>Conversation starter</div>
      <div className={styles.initialQue}>Who would you prefer to have as a dinner guest? </div>
      <div className={styles.time}>4 : 00pm</div>
      <div className={styles.myMsg}>
        <div className={styles.initialQue_}>
          <p className={styles.snippetHeader}>You</p>
          {initialAns}
        </div>
        <div className={styles.seen}>{seen}</div>
      </div>

      <div className={styles.openedAns}>
        {name} answered <b>"Barack Obama"</b>
      </div>
      {showNextMsg && (
        <>
          <div className={styles.initialQue__}>
            {initialAns.toLowerCase().includes("obama")
              ? "Exactly my thought!!!"
              : `Haha! ${initialAns} is cool, but come on, Obama is the GOAT`}
          </div>
          <div className={styles.time}>4 : 02pm</div>
        </>
      )}
      {msgsArr.length
        ? msgsArr.map((e, i) => {
            return (
              <div className={styles.myMsg} key={e + i} ref={chatRef} tabIndex={0}>
                <div className={styles.initialQue_}>
                  <p className={styles.snippetHeader}>You</p>
                  {e}
                </div>
                <div className={styles.seen} key={e + i}>
                  <span className={styles.hide}>{seen}</span>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
