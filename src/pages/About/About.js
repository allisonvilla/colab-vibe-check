import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'

function About(props) {
  return (
    <div className={styles.container}>
      About
      <Link to="/">Home</Link>
    </div>
  );
}

About.propTypes = {};

export default About;
