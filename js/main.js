// Инициализация AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Кастомный курсор
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Эффект наведения на ссылки
document.querySelectorAll('a, button, .character-card, .lab-element, .quote-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'scale(1.5)';
        cursor.style.transform = 'scale(0.5)';
    });

    element.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'scale(1)';
        cursor.style.transform = 'scale(1)';
    });
});

// Переключатель темы
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
});

// Загрузка сохраненной темы
document.body.dataset.theme = localStorage.getItem('theme') || 'light';

// Параллакс эффект для фона героя
document.addEventListener('mousemove', (e) => {
    const heroBackground = document.querySelector('.hero-background');
    const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
    
    heroBackground.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
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

// Анимация карты сознания
const nodes = document.querySelectorAll('.node, .sub-node');
nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        nodes.forEach(n => {
            if (n !== node) {
                n.style.opacity = '0.5';
            }
        });
    });

    node.addEventListener('mouseleave', () => {
        nodes.forEach(n => {
            n.style.opacity = '1';
        });
    });
});

// Эффект параллакса для секций
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${yPos}px)`;
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

// Анимация лабораторных элементов
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

// Добавление эффекта размытия при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backdropFilter = 'blur(5px)';
    }
});

// Прелоадер
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});