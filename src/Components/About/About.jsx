import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} className="about-img" />
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            setPlayState(true)
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          architecto pariatur velit rem necessitatibus numquam minima commodi?
          Ullam, velit dolorem voluptates aut nesciunt minus, quisquam excepturi
          delectus a corporis alias.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          eaque modi natus in doloremque iste porro ullam provident dolores cum
          fugiat amet temporibus voluptates dolorum soluta, necessitatibus sunt
          voluptas rem?
        </p>
      </div>
    </div>
  )
}

export default About
