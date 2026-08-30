document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Set active nav link based on current URL
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    const setActiveLink = (links) => {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        
        links.forEach(link => {
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
                
                // If it's a dropdown item, also highlight the parent dropdown
                if (link.classList.contains('dropdown-item')) {
                    const parentDropdown = link.closest('.dropdown');
                    if (parentDropdown) {
                        const parentLink = parentDropdown.querySelector('.nav-link');
                        if (parentLink) parentLink.classList.add('active');
                    }
                }
            }
        });
    };

    setActiveLink(navLinks);
    setActiveLink(dropdownItems);
    
    // Contact form submission (Prevent default for UI showcase)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting Web Solutions. This is a demo form, so no message was actually sent. We will get back to you soon!');
            contactForm.reset();
        });
    }
});
