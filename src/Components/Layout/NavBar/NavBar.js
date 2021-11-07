import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <i class='fas fa-laptop-code'></i>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul
              className='navbar-nav mb-2 mb-lg-0'
              style={{ marginLeft: 'auto' }}
            >
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Skills
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Tools
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
