class AnimateIt {
    constructor(element) {
        this.element = document.querySelector(element);
    }

    animate(animationName, duration = '1s', timingFunction = 'ease', delay = '0s') {
        this.element.style.transition = all ${duration} ${timingFunction} ${delay};
        this.element.classList.add(animationName);
        
        // Удаляем класс после завершения анимации для возможности повторного использования
        this.element.addEventListener('transitionend', () => {
            this.element.classList.remove(animationName);
        }, { once: true });
    }
}

// Пример анимации
const animations = {
    fadeIn: 'fade-in',
    fadeOut: 'fade-out',
    slideIn: 'slide-in',
    slideOut: 'slide-out'
};

// Добавляем стили анимации в документ
const style = document.createElement('style');
style.innerHTML = 
    .fade-in { opacity: 1, }
    .fade-out { opacity: 0; }
    .slide-in { transform: translateX(0), }
    .slide-out { transform: translateX(100%); }
;
document.head.appendChild(style);

export { AnimateIt, animations };