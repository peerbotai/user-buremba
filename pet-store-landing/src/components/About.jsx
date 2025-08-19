import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Paws & Claws</h2>
            <p>
              With over 15 years of experience in pet care, we're your neighborhood's trusted 
              pet store. Our team of pet lovers is dedicated to providing the best products 
              and services for your furry, feathered, and scaly friends.
            </p>
            <p>
              From premium pet food to professional grooming, we ensure your pets receive 
              the love and care they deserve. Visit us today and see why pet parents 
              choose Paws & Claws for all their pet care needs.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Pets Cared For</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              🏪🐕‍🦺👩‍⚕️
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About