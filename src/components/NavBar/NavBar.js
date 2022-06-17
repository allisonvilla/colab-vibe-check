import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactComponent as NavMatches } from "assets/nav/matches.svg";
import { ReactComponent as NavFire } from "assets/nav/fire.svg";
import { ReactComponent as NavProfile } from "assets/nav/profile.svg";

const NavBar = () => {
  const { pathname } = useLocation();
  const links = [
    {
      url: "/vibecheck",
      icon: <NavFire />,
      key: `vibecheck`
    },
    {
      url: "/matches",
      icon: <NavMatches />,
      key: `matches`
    },
    {
      url: "/",
      icon: <NavProfile />,
      key: `profile`
    }
  ];

  return (
    <nav className={styles.container}>
      {links.map((i) => (
        <Link to={i.url} className={pathname === i.url ? styles.focused : null} key={i.key}>
          {i.icon}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
