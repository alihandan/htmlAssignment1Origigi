// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target element with smooth behavior
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1500,
    once: true,  // Ensures animations occur once when the user scrolls to the element
    easing: 'ease-in-out', // Easing effect for smoother animations
    offset: 100, // Adjusts when the animation starts relative to the viewport
});

// Instagram Feed (to display images dynamically)
window.onload = function () {
    const instafeed = document.getElementById('instafeed');
    if (!instafeed) return;

    // Placeholder for Instagram images. Replace with actual API integration.
    const images = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image4.jpg',
        // Add more image paths as necessary
    ];

    // Ensure there are images to display
    if (images.length === 0) {
        instafeed.innerHTML = '<p>No images available.</p>';
        return;
    }

    // Render images dynamically to the Instagram feed container
    images.forEach(image => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('col-md-3');
        imageContainer.innerHTML = `
            <img src="${image}" alt="Instagram Image" class="img-fluid rounded mb-3">
        `;
        instafeed.appendChild(imageContainer);
    });
};

// Error handling for image loading in Instagram feed
window.addEventListener('error', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'path/to/default-image.jpg'; // Fallback image in case of loading failure
    }
}, true);

// Lazy loading for images to improve performance
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});
