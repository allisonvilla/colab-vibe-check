import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
// import PropTypes from 'prop-types'

// testing firebase
import database from "../../firebaseConfig";
import { ref, set } from "firebase/database";

function Home(props) {
  // Testing Firebase
  const firebaseTest = () => {
    const ID = Math.floor(Math.random() * 500).toString();

    set(ref(database, ID), {
      test: "it is working"
    });

    console.log("Check Firebase");
  };

  return (
    <div className={styles.container}>
      Home
      <div> Welcome to vibes-check</div>
      <Link to="about">About</Link>
      <button onClick={firebaseTest}>Test Firebase</button>
    </div>
  );
}

Home.propTypes = {};

export default Home;
