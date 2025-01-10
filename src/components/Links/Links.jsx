import React from "react";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { MdVideoLibrary } from "react-icons/md"; // Ejemplo de otro ícono
import styles from "./links.module.scss";

export default function Links({ path, title, type = "normal" }) {
  const icons = {
    Home: <GrHomeRounded />,
    "Nuevo Video": <MdVideoLibrary />,
  };

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.linkButton} ${
          type === "icon" && isActive ? styles.active : ""
        } ${type === "normal" ? styles.normal : ""}`
      }
    >
      {type === "icon" && icons[title]}
      {type !== "icon" && <span>{title}</span>}
    </NavLink>
  );
}
