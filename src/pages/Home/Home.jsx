import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoContext";
import Card from "../../components/Card/Card";
import styles from "./home.module.scss";
import Title from "../../components/Title/Title";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  const { videos } = useContext(VideoContext);

  // Agrupar videos por categoría
  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className={styles.home}>
      <Banner />
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
