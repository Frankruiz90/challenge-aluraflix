import React from "react";
import styles from "./input.module.scss";

export default function Input({ type, title, placeholder, onChange, name, value,children }) {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      {type === "text" && (
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}

        ></textarea>
      )}
      {type === "select" && (
        <select onChange={onChange} name={name} value={value}>
          <option value="" selected disabled hidden>
            Seleccione una opción
          </option>
          <option value="frontend">Front end</option>
          <option value="backend">Backend</option>
          <option value="innovacionygestion">Innovación y gestión</option>
        </select>
      )}
      {children}
    </div>
  );
}
