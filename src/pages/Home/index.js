import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss"
// import PropTypes from 'prop-types'

function Index(props) {
  return (
    <div className={styles.container}>
      Home
      <div> Welcome to vibes-check</div>
      <Link to="about">About</Link>
    </div>
  );
}

Index.propTypes = {}

export default Index
