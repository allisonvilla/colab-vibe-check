import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'

function Index(props) {
  return (
    <div className={styles.container}>
      About
      <Link to="/">Home</Link>
    </div>
  );
}

Index.propTypes = {};

export default Index;
