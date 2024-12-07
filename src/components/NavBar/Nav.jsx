import React from 'react'
import style from './nav.module.scss';
import Links from '../Liks/Links';
import LogoMain from '../../assets/img/LogoMain.svg'

export default function NavBar({type = "normal"}) {
  return (
    <>
      <nav className={style.nav}>
        <img src={LogoMain} alt="" />
        <div className={style.links}>
       <Links path="/home" title= "Home" type={type}></Links>
       <Links path="/new-video" title= "Nuevo Video"type={type}></Links>

        </div>
      </nav>
    </>
  )
}
