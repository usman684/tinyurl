import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='head'>
            <h1>URL Shortener, Branded Short Links & Analytics</h1>
        </div>
        <div className='buton'>
          <div className="bton-1">View Plans</div>
          <div className="bton-2">Create Free Account</div>
        </div>  
        <br />
        <div className='span'>
            <span>Welcome to the original link shortener — simplifying the Internet through the power of the URL since 2002.</span><br />
            <span>You can use branded domains for fully custom links, track link analytics, and enjoy other powerful features with our paid plans.</span>
        </div>
        <br /> 
        <div className='butn'>
          <div className="btn-1">View Plans</div>
          <div className="btn-2">Create Free Account</div>
        </div>
        
    </section>
  )
}

export default Hero