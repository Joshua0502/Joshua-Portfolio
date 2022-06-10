import React from 'react'
import './footer.css'
import { GrFacebookOption } from 'react-icons/gr'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Joshua Rodrigues</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/joshua.rodrigues.3532" target='__blank'><GrFacebookOption className='socials__icon'/></a>
        <a href="https://twitter.com/Rod_Josh0502" target='__blank'><FiTwitter className='socials__icon'/></a>
        <a href="https://www.instagram.com/__rodrigues.josh__/" target='__blank'><AiOutlineInstagram className='socials__icon'/></a>
      </div>
      <div className="footer__copyright">
        <small><b>© COPYRIGHT JOSHUA RODRIGUES 2022</b></small>
      </div>

    </footer>
  )
}

export default footer
