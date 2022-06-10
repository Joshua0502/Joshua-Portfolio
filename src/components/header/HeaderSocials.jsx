import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/joshua-rodrigues-1419491b7/" target="_blank" ><BsLinkedin/></a>
        <a href="https://github.com/Joshua0502" target="_blank" ><FaGithub/></a>
        <a href="https://www.instagram.com/__rodrigues.josh__/" target="_blank" ><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials
