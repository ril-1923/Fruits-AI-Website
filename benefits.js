document.addEventListener('DOMContentLoaded', function() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    const statBoxes = document.querySelectorAll('.stat-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-50px)';
        card.style.transition = 'all 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    statBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'scale(0.8)';
        box.style.transition = 'all 0.5s ease';
        box.style.transitionDelay = `${index * 0.15}s`;

        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'scale(1)';
        }, 500);
    });

    const statNumbers = document.querySelectorAll('.stat-box h3');
    statNumbers.forEach(stat => {
        stat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });

        stat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
