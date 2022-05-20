import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'

function Home(props) {
  return (
    <div className={styles.container}>
      Home
      <div> Welcome to vibes-check</div>
      <Link to="about">About</Link>
    </div>
  );
}

Home.propTypes = {};

export default Home;
