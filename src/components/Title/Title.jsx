import React from 'react';
import styles from './title.module.scss';

export default function Title({ title }) {
  // Genera la clase dinámica de manera segura
  const dynamicClassName = title 
    ? styles[title.toLowerCase().replace(/\s+/g, '-')] 
    : '';

  return (
    <div className={`${styles.title} ${dynamicClassName}`}>
      <h2>{title}</h2>
    </div>
  );
}
