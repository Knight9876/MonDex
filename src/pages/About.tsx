import React from 'react'
import Wrapper from '../sections/Wrapper'
import avatarImage from "../assets/about.jpeg"
import {FaYoutube, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"

function About() {
  return (
    <div className='profile'>
      <img src={avatarImage} alt="" className='profile-image' />
      <h1 className="profile-text">Hi, I am Yash Kamble</h1>
      <h2 className="profile-text">The Creator of this Awesome PokeDex</h2>
      <h4 className="profile-text">This is an internship project created for Exposys DataLabs</h4>
      <div className="profile-links">
        <a href="https://github.com/Knight9876">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/channel/UC7NqEiOfOSS5JjXFAsV1vyw">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/yash-kamble-7ba040245/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yashkamble008/">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default Wrapper(About)
