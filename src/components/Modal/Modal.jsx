import React from "react";
import styles from "./modal.module.scss";
import { IoCloseCircleOutline } from "react-icons/io5"

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoCloseCircleOutline />
        </button>
        {children}
      </div>
    </div>
  );
}
