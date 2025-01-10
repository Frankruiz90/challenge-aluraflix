import React from 'react'
import styles from './banner.module.scss'
import BannerImg from '../../assets/img/BannerMain.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src={BannerImg} alt="banner" />
    </div>
  )
}
  