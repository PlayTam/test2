▎AnimateIt

AnimateIt - мощный инструмент для создания плавных CSS-анимаций с помощью JavaScript. С помощью этой библиотеки вы сможете легко управлять переходами, таймингами и синхронизацией анимаций.

▎Установка

Вы можете скачать библиотеку AnimateIt, кликнув на кнопку "Скачать" в репозитории или используя npm:

npm install animateit


▎Использование

1. Подключите библиотеку в ваш проект:

<script type="module">
    import { AnimateIt } from './AnimateIt.js';

    const animator = new AnimateIt('.my-element');
    
    // Запускаем анимацию
    animator.animate('fadeIn', '2s');
</script>


2. Добавьте необходимые классы анимации в CSS:
```
.my-element {
    opacity: 0; /* Начальное состояние для fadeIn */
    transform: translateX(-100%); /* Начальное состояние для slideIn */
}
```
