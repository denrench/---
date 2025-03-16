document.addEventListener('DOMContentLoaded', function() {
    // Обработка клика на гамбургер-меню
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Анимация при прокрутке
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Однократная анимация
            }
        });
    }, {
        threshold: 0.1 // Порог видимости элемента (10%)
    });

    animateOnScrollElements.forEach((element) => {
        observer.observe(element);
    });

    // Анимация "пузырей" на фоне героя
    const heroAnimationContainer = document.querySelector('.hero-animation-container');
    const numberOfBubbles = 15; // Увеличьте количество пузырей

    if (heroAnimationContainer) {
        for (let i = 0; i < numberOfBubbles; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('hero-animation-element');
            bubble.style.width = `${Math.random() * 80 + 20}px`; // Случайный размер
            bubble.style.height = bubble.style.width;
            bubble.style.left = `${Math.random() * 100}vw`; // Случайная позиция по горизонтали
            bubble.style.top = `${Math.random() * 100}vh`; // Случайная позиция по вертикали
            bubble.style.animationDelay = `${Math.random() * 10}s`; // Случайная задержка
            bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // Случайная продолжительность
            bubble.style.opacity = Math.random() * 0.6 + 0.2; // Случайная начальная прозрачность
            heroAnimationContainer.appendChild(bubble);
        }
    }

    // Базовый слайдер для отзывов (автоматическая прокрутка)
    const reviewsSlider = document.querySelector('.reviews-slider');
    let scrollPosition = 0;

    if (reviewsSlider) {
        setInterval(() => {
            scrollPosition += reviewsSlider.offsetWidth;
            if (scrollPosition >= reviewsSlider.scrollWidth) {
                scrollPosition = 0;
            }
            reviewsSlider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }, 5000); // Смена слайда каждые 5 секунд
    }
});