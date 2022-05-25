import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'

function Home(props) {
  const userData = {
    userName: `Onyinye`,
    userAge: 24
  };
  return (
    <div className={styles.container}>
      <img
        src={require("../../assets/profile-picture-1.png")}
        alt="A woman smiling with her arms crossed"
      />

      <h1>
        {userData.userName} {userData.userAge}
      </h1>

      <Link to="/" className={styles.vibeCheckBtn}>
        Vibe Check
      </Link>

      <Link to="/" className={styles.profilePreview}>
        Preview Display Profile
      </Link>
    </div>
  );
}

Home.propTypes = {};

export default Home;
