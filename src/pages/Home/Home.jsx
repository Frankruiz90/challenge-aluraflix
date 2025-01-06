import React, { useContext, useState } from "react";
import { VideoContext } from "../../context/VideoContext";
import Card from "../../components/Card/Card";
import styles from "./home.module.scss";
import Title from "../../components/Title/Title";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";

export default function Home() {
  const { videos } = useContext(VideoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleCloseModal =()=> setIsModalOpen(false);

  const openEditForm = (video) => {
    console.log(video);
    
    setModalContent(
      <Form
        titleForm="Editar Video"
        {...video}
        onCloseModal={handleCloseModal}
      />
    );
    setIsModalOpen(true);
  };

  const openVideoPlayer = (video) => {
    setModalContent(
      <div>
        <h2>{video.title}</h2>
        <iframe width="560" height="315" src={video.link} allowfullscreen></iframe>
      </div>
    );
    setIsModalOpen(true);
  };

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
              <Card {...video} key={video.id} onEdit={openEditForm}
              onPlay={openVideoPlayer}/>
            ))}
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
        </div>
        
      ))}
    </div>
  );
}
