// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add click events to adopt buttons
    const adoptButtons = document.querySelectorAll('.adopt-button');
    adoptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const petCard = this.closest('.pet-card');
            const petName = petCard.querySelector('h3').textContent;
            
            // Create adoption inquiry
            const message = `I'm interested in adopting ${petName}!`;
            const subject = `Pet Adoption Inquiry - ${petName}`;
            const mailtoLink = `mailto:info@happypaws.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            
            // Show confirmation
            if (confirm(`Would you like to start the adoption process for ${petName}?`)) {
                // In a real application, this would open an adoption form or contact system
                alert(`Great! We'll connect you with our adoption team about ${petName}. Check your email for next steps!`);
                
                // Optional: Open email client
                // window.location.href = mailtoLink;
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
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

    // Observe service cards and pet cards
    const animatedElements = document.querySelectorAll('.service-card, .pet-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add some interactive hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation
    document.body.classList.add('loaded');
});

// Add some CSS for the loaded state
const style = document.createElement('style');
style.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .service-card, .pet-card {
        will-change: transform, opacity;
    }
`;
document.head.appendChild(style);