import React, { useContext, useState } from "react";
import { VideoContext } from "../../context/VideoContext";
import Card from "../../components/Card/Card";
import styles from "./home.module.scss";
import Title from "../../components/Title/Title";
import Banner from "../../components/Banner/Banner";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import YouTubePlayer from "react-player/youtube";
import Loading from "../../components/Loading/Loading";

export default function Home() {
  const { videos,changeLoading } = useContext(VideoContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const handleCloseModal = () => setIsModalOpen(false);

  const openEditForm = (video) => {

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
    changeLoading(true);
    setModalContent(
      <div>
        <h2>{video.title}</h2>
        <YouTubePlayer
          style={{ margin: "auto", height: "auto" }}
          url={video.link}
          playing={false}
          volume={0.5}
          onReady={()=>{
            changeLoading(false);
          }}
        />
        <p>{video.description}</p>
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
      <Loading />
      <Banner />
      {Object.keys(groupedVideos).map((category) => (
        <div
          key={category}
          className={`${styles.categoryGroup} ${styles[category] || ""}`}
        >
          <Title title={category} />
          <div className={styles.cards}>
            {groupedVideos[category].map((video) => (
              <Card
                {...video}
                key={video.id}
                onEdit={openEditForm}
                onPlay={openVideoPlayer}
              />
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
