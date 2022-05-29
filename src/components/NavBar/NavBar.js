import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactComponent as NavSwipe } from "../../assets/nav-swipe.svg";
import { ReactComponent as NavMatches } from "../../assets/nav-matches.svg";
import { ReactComponent as NavProfile } from "../../assets/nav-profile.svg";

const NavBar = () => {
  const currentPage = () => {};

  return (
    <nav className={styles.container}>
      <Link to="/">
        <NavSwipe />
      </Link>
      <Link to="/">
        <NavMatches />
      </Link>
      <Link to="/">
        why
        <NavProfile />
      </Link>
    </nav>
  );
};

export default NavBar;
