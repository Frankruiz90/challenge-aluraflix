import React, { useContext } from "react";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { VideoContext } from "../../context/VideoContext"; // Importamos el contexto


export default function Card({ title, id, img, category }) {
    const { deleteVideo } = useContext(VideoContext); // Usamos el contexto
  
  const dynamicClassName = category 
    ? styles[category.toLowerCase().replace(/\s+/g, '-')] 
    : '';
  const handleDelete = (id) => {
    deleteVideo(id)
  }
  return (
    <div className={`${styles.card} ${dynamicClassName}`}>
      <div className={`${styles.cardImage} ${dynamicClassName}`}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className={styles.cardButtons}>
        <button onClick={()=>handleDelete(id)}>
          <MdOutlineDeleteForever />
          Eliminar
        </button>
        <button>
          <BiEditAlt />
          Editar
        </button>
      </div>
    </div>
  );
}
