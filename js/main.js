// Добавьте этот код к существующему JavaScript файлу

// Интерактивная карта сознания
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('mouseenter', () => {
        node.style.transform = 'scale(1.1)';
        node.style.boxShadow = '0 0 20px var(--accent-color)';
    });

    node.addEventListener('mouseleave', () => {
        node.style.transform = 'scale(1)';
        node.style.boxShadow = 'none';
    });
});

// Анимация временной линии
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Лабораторные элементы
document.querySelectorAll('.lab-element').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.querySelector('.hologram-effect').style.opacity = '1';
    });

    element.addEventListener('mouseleave', () => {
        element.querySelector('.hologram-effect').style.opacity = '0.5';
    });
});

// 3D эффект для карточек с цитатами
document.querySelectorAll('.quote-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 20;
        const yRotation = ((x - rect.width / 2) / rect.width) * 20;
        
        card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Добавление интерактивных элементов при скролле
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});