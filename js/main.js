document.addEventListener('DOMContentLoaded', () => {
    // --- UI Elements ---
    const modalOverlay = document.getElementById('appointment-modal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const appointmentForm = document.getElementById('appointment-form');
    
    // --- Modal Logic ---
    const openModal = () => {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the container box
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // --- Form Handling ---
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get value data
        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const date = document.getElementById('date').value;

        // Custom validation/Notification feedback 
        alert(`Thank you, ${name}! Your appointment for the ${department} department has been tentatively booked for ${date}. We will send a confirmation email shortly.`);
        
        // Reset and clear view
        appointmentForm.reset();
        closeModal();
    });

    // --- Basic Smooth Scroll Tracker ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});



