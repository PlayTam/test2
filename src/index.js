class AnimateIt {
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({}, {
            duration: 1000,
            delay: 0,
            easing: 'ease',
            iterations: 1,
            direction: 'normal',
            fillMode: 'both'
        }, options);
        
        // Проверка элемента
        if (!this.element || !this.element.style) {
            throw new Error('Элемент не найден.');
        }
    }
    
    /**
     * Метод для запуска анимации
     * @param {Object} keyframes Объект ключевых кадров
     */
    start(keyframes) {
        const animation = this.element.animate(
            keyframes,
            {
                duration: this.options.duration,
                delay: this.options.delay,
                easing: this.options.easing,
                iterations: this.options.iterations,
                direction: this.options.direction,
                fill: this.options.fillMode
            }
        );
        
        return animation.finished.then(() => {
            console.log('Анимация завершена');
        });
    }
}

export default AnimateIt;