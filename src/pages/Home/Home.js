import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import NavBar from "components/NavBar/NavBar";
import { useContext } from "react";
import { UserContext } from "App";

function Home() {
  const userContext = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}></div>

      <h1>
        {userContext.userData.name} {userContext.userData.age}
      </h1>

      <Link to="/vibecheck" className={styles.vibeCheckBtn}>
        Vibe Check
      </Link>

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
