import React from 'react';
import styles from './button.module.scss';
import { NavLink } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Links from '../Liks/Links';
// import { HomeIcon, PlusIcon } from "./Icons";

export const Button = ({ children, onClick }) => {
  return (<>
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
    <nav>
      {/* Ejemplo de enlace */}
      <NavLink
        to="/home"
        element={<Home />}
        className={({ isActive }) => (isActive ? `${styles.linkButton} ${styles.active}` : styles.linkButton)}
      >
        {/* <HomeIcon /> */}
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/about"
        element={<Home />}
        className={({ isActive }) => (isActive ? `${styles.linkButton} ${styles.active}` : styles.linkButton)}
      >
        {/* <PlusIcon /> */}
        <span>Nuevo Video</span>
      </NavLink> 

      <Links path="/home" title="works"/>
    </nav>
  </>
  );
};