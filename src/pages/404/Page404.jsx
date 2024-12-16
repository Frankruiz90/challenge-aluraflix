import React from "react";
import page404 from "../../assets/img/Animation - 1734106954578 (1).gif";
import styles from "./page404.module.scss";

export default function Page404() {
  return (
    <div className={styles.notfound}>
      <img src={page404} alt="404" />
    </div>
  );
}
