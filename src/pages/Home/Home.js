import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import NavBar from "components/NavBar/NavBar";
import { useContext } from "react";
import { UserContext } from "App";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

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
          Vibe Check Results <HiOutlineChevronDoubleRight />
        </Link>
      ) : (
        <Link to="/vibecheck" className={styles.vibeCheckBtn}>
          Vibe Check <HiOutlineChevronDoubleRight />
        </Link>
      )}
      <div className={styles.spacer} />
      <NavBar />
    </div>
  );
}

export default Home;
