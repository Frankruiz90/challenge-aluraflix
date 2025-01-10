import React, { useContext } from "react";
import styles from "./Loading.module.scss";
import { VideoContext } from "../../context/VideoContext";
import LogoMain from '../../assets/img/LogoMain.svg'

export default function Loading() {
  const { loading } = useContext(VideoContext);

  return (
    <>
      {loading && (
        <div className={styles.loadingOverlay}>
          <img src={LogoMain} alt="" />
          <div className={styles.spinner}></div>
        </div>
      )}
    </>
  );
}
