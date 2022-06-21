import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { UserContext } from "App";
import BodyWithNavBar from "components/BodyWithNavBar/BodyWithNavBar";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function Home() {
  const { userData } = useContext(UserContext);
  return (
    <BodyWithNavBar>
      <div className={styles.imgWrapper} />
      <h1 className={styles.nameAge}>
        {userData.name} {userData.age}
      </h1>
      <div className={styles.divider} />
      {userData.daterType && userData.showOnProfile ? (
        <Link to="/myresults" className={styles.resultsBtn}>
          Vibe Check Results <HiOutlineChevronDoubleRight />
        </Link>
      ) : (
        <Link to="/vibecheck" className={styles.vibeCheckBtn}>
          Vibe Check <HiOutlineChevronDoubleRight />
        </Link>
      )}
    </BodyWithNavBar>
  );
}

export default Home;
