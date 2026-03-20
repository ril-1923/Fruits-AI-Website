document.addEventListener('DOMContentLoaded', function() {
    const fruitItems = document.querySelectorAll('.fruit-item');

    fruitItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.hero > div').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
