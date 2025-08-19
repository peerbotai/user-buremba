import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>🐾 Paws & Claws</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header