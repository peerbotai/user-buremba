import React from 'react'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Your Pet's Happiness is Our Priority</h1>
        <p>Premium pet supplies, expert grooming, and compassionate care for your furry friends</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Book Grooming</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="pet-placeholder">
          🐕🐱🐰
        </div>
      </div>
    </section>
  )
}

export default Hero