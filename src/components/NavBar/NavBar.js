import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactComponent as NavSwipe } from "assets/nav/swipe.svg";
import { ReactComponent as NavMatches } from "assets/nav/fire.svg";
import { ReactComponent as NavProfile } from "assets/nav/profile.svg";

const NavBar = () => {
  const currentPage = useLocation();

  const links = [
    { type: `swipe`, icon: <NavSwipe />, link: `/swipe` },
    { type: `matches`, icon: <NavMatches />, link: `/matches` },
    { type: `profile`, icon: <NavProfile />, link: `/` }
  ];

  return (
    <nav className={styles.container}>
      {links.map((i) => (
        <Link to={i.link} className={currentPage.pathname === i.link ? styles.focused : null}>
          {i.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
