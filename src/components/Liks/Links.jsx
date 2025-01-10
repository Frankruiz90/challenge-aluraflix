import React from "react";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import styles from "./links.module.scss";

export default function Links({ path, title, type = 'normal' }) {
  return (
    <NavLink
    to={path}
    className={({ isActive }) =>
      `${type === 'icon' ? styles.linkButton: ''} ${isActive && type === 'icon' ? `${styles.linkButton} ${styles.active}` : ''} ${
        type === 'normal' ? styles.normal : ''
      }`
    }
  >
    
    {type === 'icon' && <GrHomeRounded />}
    <span>{title}</span>
    </NavLink>
  );
}
