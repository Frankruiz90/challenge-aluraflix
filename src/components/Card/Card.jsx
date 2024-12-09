import React from "react";
import styles from "./card.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

export default function Card({ title, id, img }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={img} alt={title} />
        </Link>
      </div>
      <div className={styles.cardButtons}>
        <button>
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
