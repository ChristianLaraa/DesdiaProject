// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            const rating = this.getAttribute('data-value');
            console.log(`Rating: ${rating} stars`);
            // Aquí puedes enviar la calificación al servidor o procesarla como desees
        });

        star.addEventListener('mouseover', function() {
            stars.forEach(s => s.classList.remove('hover'));
            this.classList.add('hover');
            let previousSibling = this.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('hover');
                previousSibling = previousSibling.previousElementSibling;
            }
        });

        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
});

