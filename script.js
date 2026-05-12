// Simplest working version - no fancy stuff
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
    
    // Menu toggle
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    if (menuIcon) {
        menuIcon.onclick = function() {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        }
    }
    
    // GitHub icon - direct approach
    let githubIcon = document.querySelector('.home .social-icons a:first-child');
    if (githubIcon) {
        githubIcon.onclick = function(e) {
            e.preventDefault();
            window.open('https://github.com/keroshohdy', '_blank');
        }
    }
    
    // LinkedIn icon
    let linkedinIcon = document.querySelector('.home .social-icons a:nth-child(2)');
    if (linkedinIcon) {
        linkedinIcon.onclick = function(e) {
            e.preventDefault();
            window.open('https://www.linkedin.com/in/keroles-shohdy', '_blank');
        }
    }
    
    // Instagram icon
    let instagramIcon = document.querySelector('.home .social-icons a:nth-child(3)');
    if (instagramIcon) {
        instagramIcon.onclick = function(e) {
            e.preventDefault();
            window.open('https://www.instagram.com/kerolisshohdy/', '_blank');
        }
    }
    
    // Facebook icon
    let facebookIcon = document.querySelector('.home .social-icons a:nth-child(4)');
    if (facebookIcon) {
        facebookIcon.onclick = function(e) {
            e.preventDefault();
            window.open('https://www.facebook.com/kerolis.shohdy.2025', '_blank');
        }
    }
    
    // Contact button
    let contactBtn = document.querySelector('.btn-group .btn:last-child');
    if (contactBtn) {
        contactBtn.onclick = function(e) {
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Hire button
    let hireBtn = document.querySelector('.btn-group .btn:first-child');
    if (hireBtn) {
        hireBtn.onclick = function(e) {
            e.preventDefault();
            alert('📧 Please use the contact form below to reach me!');
        }
    }
    
    // ==========================================
    // CONTACT FORM - LOCAL STORAGE (NEW CODE)
    // ==========================================
    let contactForm = document.querySelector('.contact form');
    
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            
            // Get form values
            let name = document.querySelector('.input-box input[placeholder="Full Name"]')?.value;
            let email = document.querySelector('.input-box input[placeholder="Email"]')?.value;
            let phone = document.querySelector('.input-box input[placeholder="Phone Number"]')?.value;
            let subject = document.querySelector('.input-box input[placeholder="Subject"]')?.value;
            let message = document.querySelector('textarea')?.value;
            let date = new Date().toLocaleString('en-US');
            
            // Validate
            if (!name || !email || !message) {
                alert('❌ Please fill in Name, Email, and Message fields!');
                return;
            }
            
            // Create data object
            let formData = {
                id: Date.now(),
                name: name,
                email: email,
                phone: phone || 'Not provided',
                subject: subject || 'No subject',
                message: message,
                date: date
            };
            
            // Get existing messages
            let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
            
            // Add new message
            messages.push(formData);
            
            // Save to local storage
            localStorage.setItem('contactMessages', JSON.stringify(messages));
            
            // Show success
            alert(`✅ Thank you ${name}! Your message has been saved locally.\n\n📊 Total messages: ${messages.length}`);
            
            // Clear form
            contactForm.reset();
            
            // Show in console
            console.log('New message saved:', formData);
            console.log('All messages:', messages);
        };
    }
    
    // Helper function to view messages (type 'viewMessages()' in console)
    window.viewMessages = function() {
        let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        console.table(messages);
        alert(`📨 You have ${messages.length} message(s) saved. Open console (F12) to see details.`);
        return messages;
    };
    
    console.log('✅ Local Storage contact form is ready!');
});