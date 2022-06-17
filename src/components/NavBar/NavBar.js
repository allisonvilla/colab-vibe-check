import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import NavMatches from "assets/nav-matches";
import NavSwipe from "assets/nav-swipe";
import NavProfile from "assets/nav-profile";

const NavBar = () => {
  const { pathname } = useLocation();
  const links = [
    {
      url: "/vibecheck",
      navIcon: NavSwipe
    },
    {
      url: "/matches",
      navIcon: NavMatches
    },
    {
      url: "/",
      navIcon: NavProfile
    }
  ];

  return (
    <nav className={styles.container}>
      {links.map(({ navIcon: Logo, url }, i) => {
        return (
          <Link to={url} className={pathname === url ? styles.active : ""} key={i + url}>
            <Logo stroke={pathname === url ? "#F73A5A" : null} />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
