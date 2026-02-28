import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p>TINYURL</p>
        <a href="#">Plans</a>
        <a href="#">Features</a>
        <a href="#">Domains</a>
        <a href="#">Resources</a>
        <div>
            <a href="#" className='btn'>Log In</a>
            <button className='btn2'>Sign Up</button>
        </div>
        
    </nav>
  )
}

export default Navbar
