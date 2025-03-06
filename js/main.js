// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true
});

// Кастомный курсор
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Эффект наведения на ссылки
document.querySelectorAll('a, button').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
        cursor.style.transform = 'scale(0.5)';
    });

    link.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
        cursor.style.transform = 'scale(1)';
    });
});

// Переключатель темы
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Параллакс эффект для фона героя
document.addEventListener('mousemove', (e) => {
    const heroBackground = document.querySelector('.hero-background');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
    
    heroBackground.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при скролле для карточек персонажей
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.character-card').forEach(card => {
    observer.observe(card);
});