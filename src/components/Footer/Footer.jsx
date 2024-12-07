import React from 'react'
import styles from './footer.module.scss'
import NavBar from '../NavBar/Nav'

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <NavBar type='icon'></NavBar>
    </footer>
    </>
  )
}
