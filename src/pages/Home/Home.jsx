import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./home.module.scss";
import Title from "../../components/Title/Title";

export default function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className={styles.home}>
      {Object.keys(groupedVideos).map((category) => (
        <div
          key={category}
          className={`${styles.categoryGroup} ${styles[category] || ""}`}
        >
          <Title title={category} />
          <div className={styles.cards}>
            {groupedVideos[category].map((video) => (
              <Card {...video} key={video.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
