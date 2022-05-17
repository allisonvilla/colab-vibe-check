import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles.module.scss";


export function FullPageSpinner() {
  return (
    <div className={styles.container}>
      <AiOutlineLoading3Quarters fontSize={35} aria-label="loading" />
    </div>
  );
}

export function Spinner() {
  return (
    <div className={styles.containerInline}>
      <AiOutlineLoading3Quarters aria-label="loading" />
    </div>
  );
}
