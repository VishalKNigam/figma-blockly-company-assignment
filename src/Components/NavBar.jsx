import React from 'react'
import LogoImg from "../assets/navbar/Logo.svg";
import MoonImg from "../assets/navbar/Moon.svg";
import LightImg from "../assets/navbar/lightImg.svg"
const NavBar = () => {
  return (
    <div className='navbar-parent-container' >
      <div className='navbar-first-container'>
        <img src={LogoImg} alt="LogoImg" />
        <p>ANISH KUMAR SINHA</p>
      </div>
      <div className='navbar-second-container'>
        <p>Home</p>
        <p>About</p>
        <p>Resume</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
        <img src={MoonImg} alt="MoonImg" />
        <img src={LightImg} alt="LightImg" />

      </div>
    </div>
  )
}

export default NavBar