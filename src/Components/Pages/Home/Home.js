import React from 'react'

import './Home.css'
import NavBar from '../../Layout/NavBar/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='content'>
        <div className='content-text'>
          <h1>johnny ung</h1>
          <h3>Web Developer</h3>
          <button className='btn btn-dark'>resume</button>
        </div>
      </div>
    </>
  )
}

export default Home
