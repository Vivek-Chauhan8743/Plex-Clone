// Get all scroll buttons
const leftBtns = document.querySelectorAll('.left-btn');
const rightBtns = document.querySelectorAll('.right-btn');

// Get the correct scrollable containers
const carousels = [
    document.querySelector('.carousel'),      // Movie carousel
    document.querySelector('.carousel-tv')    // TV channel carousel
];

// Attach listeners for both button sets
rightBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        carousels[index].scrollBy({ left: 350, behavior: 'smooth' });
    });
});

leftBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        carousels[index].scrollBy({ left: -350, behavior: 'smooth' });
    });
});
