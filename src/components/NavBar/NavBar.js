import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as NavSwipe } from "assets/nav-swipe.svg";
import { ReactComponent as NavMatches } from "assets/nav-matches.svg";
import { ReactComponent as NavProfile } from "assets/nav-profile.svg";

const NavBar = () => {
  const [swipeColour, setSwipeColour] = useState("");
  const [matchesColour, setMatchesColour] = useState("");
  const [profileColour, setProfileColour] = useState("");

  const currentPage = useLocation();

  useEffect(() => {
    setSwipeColour("none");
    setMatchesColour("none");
    setProfileColour("none");

    if (currentPage.pathname === "/") {
      setProfileColour("red");
    } else if (currentPage.pathname === "/matches") {
      setMatchesColour("red");
    } else if (currentPage.pathname === "/swipe") {
      setSwipeColour("red");
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
