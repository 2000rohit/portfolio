import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='about-profile'>
          <img src='https://johnnyungcodes.com/img/johnny.jpg' alt='profile' />
        </div>
        <div className='about-profile-info'>
          <h1>
            Hello! I'm Johnny Ung, A Full Stack Developer From Los Angeles, CA
          </h1>
          <p>
            After graduating with a bachelor’s in biology, I found myself in a
            stable career as a microbiologist for a major brewery. While the
            idea of working at a brewery was definitely a great conversation
            starter, I realized that although I still had a love for science,
            the industry I was in was lacking in creativity and problem solving.
            After dabbling with some introductory JavaScript courses on the
            internet and exploring programming through self-teaching, I decided
            to take a leap of faith and made a switch in careers into tech.
          </p>
          <p>
            Through LearningFuze, I have developed a strong understanding of
            JavaScript (ES5 & ES6), React, Node.js, Express, PostgreSQL, HTML5,
            and CSS3. As a developer, I find a lot of joy and excitement
            utilizing my skills to help troubleshoot bugs and pushing projects
            forward. I enjoy learning new technologies and growing in a field
            that is constantly being pushed to new boundaries.
          </p>
          <p>
            Feel free to connect with me! Let's talk about web dev, tech,
            sports, photography, video games, cooking, or how I can be of help
            to your team or business! I'd love to get to know more developers
            and expand my network. I also know a thing or two about beer.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
