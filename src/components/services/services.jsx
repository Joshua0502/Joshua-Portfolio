import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Prototyping and wireframing</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Visual design and design software</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Agile</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Information architecture </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Application development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Communication and presentation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Competencies</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Computer literacy</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Strong numeracy skills</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Attention to detail</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Strong communication skills</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Excellent problem-solving skills</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>A logical approach to work</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>The ability to explain technical matters clearly</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>A keen interest in technology</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Key Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Basic Software Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Design Thinking</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>User Research and Training</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>FronEnd Development</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Andriod Studio</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon"/>
              <p>Adobe Photoshop</p>
            </li>
          </ul>
        </article>

        
      </div>
    </section>
  )
}

export default services
