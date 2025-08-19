import React from 'react'

function Services() {
  const services = [
    {
      icon: '🛍️',
      title: 'Pet Supplies',
      description: 'Premium food, toys, and accessories for all your pets'
    },
    {
      icon: '✂️',
      title: 'Pet Grooming',
      description: 'Professional grooming services to keep your pets looking their best'
    },
    {
      icon: '🏥',
      title: 'Pet Health',
      description: 'Veterinary care and health consultations for your furry friends'
    },
    {
      icon: '🏨',
      title: 'Pet Boarding',
      description: 'Safe and comfortable boarding services when you\'re away'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Everything your pet needs under one roof</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services