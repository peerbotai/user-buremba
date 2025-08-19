// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero button interactions
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Adopt Now') {
                document.querySelector('#pets').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (this.textContent === 'Our Services') {
                document.querySelector('#services').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adopt button interactions
    const adoptButtons = document.querySelectorAll('.btn-adopt');
    adoptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const petName = this.closest('.pet-info').querySelector('h3').textContent;
            showAdoptionModal(petName);
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showThankYouMessage();
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Pet profile hover effects
    const petProfiles = document.querySelectorAll('.pet-profile');
    petProfiles.forEach(profile => {
        profile.addEventListener('mouseenter', function() {
            this.querySelector('.pet-image').style.transform = 'scale(1.1)';
        });
        
        profile.addEventListener('mouseleave', function() {
            this.querySelector('.pet-image').style.transform = 'scale(1)';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in animation
    const sections = document.querySelectorAll('.services, .featured-pets, .contact');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Adoption modal functionality
function showAdoptionModal(petName) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;

    modalContent.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: #333;">🎉 Thank You!</h2>
        <p style="margin-bottom: 1.5rem; color: #666;">
            Thank you for your interest in adopting <strong>${petName}</strong>! 
            We'll contact you soon to arrange a meet-and-greet.
        </p>
        <button class="btn btn-primary" onclick="closeModal()" style="padding: 10px 20px;">Close</button>
    `;

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Animate modal in
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);

    // Close modal on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Close modal functionality
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'scale(0.8)';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Thank you message for contact form
function showThankYouMessage() {
    const form = document.querySelector('.contact-form form');
    const originalHTML = form.innerHTML;
    
    form.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
            <h3 style="color: #e67e22; margin-bottom: 1rem;">🐾 Thank You!</h3>
            <p style="color: #666;">Your message has been sent. We'll get back to you soon!</p>
            <button type="button" class="btn btn-secondary" onclick="resetContactForm()" style="margin-top: 1rem;">Send Another Message</button>
        </div>
    `;
    
    // Store original form HTML for reset
    form.dataset.originalHtml = originalHTML;
}

// Reset contact form
function resetContactForm() {
    const form = document.querySelector('.contact-form form');
    form.innerHTML = form.dataset.originalHtml;
    
    // Re-attach form submission listener
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showThankYouMessage();
    });
}

// Add some fun interactions
document.addEventListener('DOMContentLoaded', function() {
    // Make pet emojis in hero section clickable
    const petEmojis = document.querySelectorAll('.pet-showcase .pet-emoji');
    petEmojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});