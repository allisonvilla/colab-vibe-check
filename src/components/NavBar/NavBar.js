import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as NavSwipe } from "assets/nav/swipe.svg";
import { ReactComponent as NavMatches } from "assets/nav/fire.svg";
import { ReactComponent as NavProfile } from "assets/nav/profile.svg";

const NavBar = () => {
  const [swipeColour, setSwipeColour] = useState("");
  const [matchesColour, setMatchesColour] = useState("");
  const [profileColour, setProfileColour] = useState("");

  const currentPage = useLocation();

  useEffect(() => {
    const focusColour = "#F64900";

    setSwipeColour("none");
    setMatchesColour("none");
    setProfileColour("none");

    if (currentPage.pathname === "/") {
      setProfileColour(focusColour);
    } else if (currentPage.pathname === "/matches") {
      setMatchesColour(focusColour);
    } else if (currentPage.pathname === "/swipe") {
      setSwipeColour(focusColour);
    }
  }, [currentPage]);

  return (
    <nav className={styles.container}>
      <Link to="/">
        <NavSwipe stroke={swipeColour} />
      </Link>
      <Link to="/">
        <NavMatches stroke={matchesColour} />
      </Link>
      <Link to="/">
        <NavProfile stroke={profileColour} />
      </Link>
    </nav>
  );
};

export default NavBar;
