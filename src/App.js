import './App.css'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import NavBar from './Components/Layout/NavBar/NavBar'
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About/About'

const App = () => {
  return (
    <>
      <div className='home'>
        {/* <NavBar /> */}
        <Home />
      </div>
      <About />
    </>
  )
}

export default App
