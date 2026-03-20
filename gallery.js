document.addEventListener('DOMContentLoaded', function() {
    const fruitCards = document.querySelectorAll('.fruit-card');

    fruitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    fruitCards.forEach(card => {
        card.addEventListener('click', function() {
            const icon = this.querySelector('.fruit-icon');
            icon.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                icon.style.transform = '';
            }, 600);
        });
    });
});
