import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import NavBar from "components/NavBar/NavBar";
import { useContext } from "react";
import { UserContext } from "App";

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}></div>

      <h1>
        {userData.name} {userData.age}
      </h1>

      <div className={styles.divider}></div>

      {userData.daterType ? (
        <Link to="/myresults" className={styles.resultsBtn}>
          Vibe Check Results {">>"}
        </Link>
      ) : (
        <Link to="/vibecheck" className={styles.vibeCheckBtn}>
          Vibe Check {">>"}
        </Link>
      )}

      <Link to="/myprofile" className={styles.profilePreview}>
        Preview Display Profile{" "}
        <img
          src={require("../../assets/eye.png")}
          alt="Eye icon"
          className={styles.profilePreviewIcon}
        />
      </Link>
      <div className={styles.spacer} />
      <NavBar />
    </div>
  );
}

export default Home;
