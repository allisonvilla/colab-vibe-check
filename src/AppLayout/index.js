import React from "react";
import styles from "./styles.module.scss";
// import Navbar from "component/Navbar";
// import Footer from "component/Footer";

const AppLayout = ({ children }) => {

  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
