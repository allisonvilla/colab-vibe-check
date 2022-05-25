import React from "react";
//import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'
import UserProfile from "pages/UserProfile/UserProfile";

function Home(props) {
  return (
    <div className={styles.container}>
      <UserProfile />
    </div>
  );
}

Home.propTypes = {};

export default Home;
