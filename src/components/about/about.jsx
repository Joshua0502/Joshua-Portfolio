import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FiAward} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FiAward className='about__icon' />
            <h5>Experience</h5>
            <small>1 Year Internship Experience</small>
          </article>

          <article className='about__card'>
            <FiStar className='about__icon'/>
            <h5>Qualification</h5>
            <small>Computer Engineering Thrid Year</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>4 Projects Completed</small>
          </article>
        </div>
        <p>Searching for favorable internship opportunity that would assist me
            in gaining greater practical
            excellence in the IT and software
            industry and where I can put my
            analytical and technical skills to
            contribute to the growth of the
            organization.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default about
