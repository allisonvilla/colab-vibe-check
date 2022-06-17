import styles from "./styles.module.scss";
import NavBar from "components/NavBar/NavBar";


function Home({children}) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.spacer} />
      <NavBar />
    </div>
  );
}

export default Home;
