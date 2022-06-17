import styles from "./styles.module.scss";
import BodyWithNavBar from "components/BodyWithNavBar/BodyWithNavBar";
import { ReactComponent as LoveIcon } from "assets/recentMatchesLove.svg";
import { ReactComponent as MsgIcon } from "assets/lovemessagesicon.svg";
import george from "assets/george.svg";
import troy from "assets/troy.svg";
import derek from "assets/derek.svg";
import segeayo from "assets/segeayo.svg";
import tom from "assets/tombarabraithe.svg";
import temi from "assets/temioladapo.svg";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const topmatches = [
    {
      imgsrc: george,
      name: "George",
      age: "24",
      status: "Inactive"
    },
    {
      imgsrc: troy,
      name: "Troy",
      age: "24",
      status: "Active"
    },
    {
      imgsrc: derek,
      name: "Derek",
      age: "24",
      status: "Active"
    }
  ];

  const chatArr = [
    {
      name: "Sege Ayo",
      msg: "Hello, I have received my ...",
      time: "4 : 00pm",
      imgsrc: segeayo
    },
    {
      name: "Temi Oladipo",
      msg: "Hello, I have received my ...",
      time: "4 : 00pm",
      imgsrc: temi
    },
    {
      name: "Tombara Braithe",
      msg: "Hello, I have received my ...",
      time: "4 : 00pm",
      imgsrc: tom
    }
  ];

  return (
    <BodyWithNavBar>
      <div className={styles.subHeader}>
        <div className={styles.iconandspan}>
          <LoveIcon /> <span>Recent Matches</span>
        </div>
        <div className={styles.hLine} />
      </div>
      <div className={styles.topMatches}>
        {topmatches.map(({ imgsrc, name, age, ...props }, i) => {
          return (
            <div
              className={styles.img}
              key={name + i}
              onClick={() => navigate("/matches/chat", { state: { imgsrc, name, age, ...props } })}
            >
              <img src={imgsrc} alt="profile-pic" />
              <div className={styles.name}>
                {name}, {age}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.subHeader}>
        <div className={styles.iconandspan}>
          <MsgIcon /> <span>Messages</span>
        </div>
        <div className={styles.hLine} style={{ marginBottom: "40px" }} />
        {chatArr.map(({ name, msg, time, imgsrc }, index) => {
          return (
            <div className={styles.messages} key={name + index}>
              <div className={styles.message}>
                <img src={imgsrc} alt="small-pic" />
                <div className={styles.chatMsg}>
                  <div className={styles.chatName}>{name}</div>
                  <div className={styles.chat}>{msg}</div>
                </div>
                <div className={styles.chatTime}>{time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </BodyWithNavBar>
  );
}

export default Index;
