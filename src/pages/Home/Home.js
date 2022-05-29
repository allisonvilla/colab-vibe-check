import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import NavBar from "components/NavBar/NavBar";
import userData from "userData";

function Home() {
  return (
    <div className={styles.container}>
      <img
        src={require("../../assets/profile-picture-1.png")}
        alt="A woman smiling with her arms crossed"
      />

      <h1>
        {userData.userName} {userData.userAge}
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

      <NavBar />
    </div>
  );
}

export default Home;
