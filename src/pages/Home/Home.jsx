import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./home.module.scss";

export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <div className={styles.home}>
      {videos.map((video) => {
        return <Card {...video} key={video.id} />;
      })}
    </div>
  );
}
