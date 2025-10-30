document.addEventListener('DOMContentLoaded', () => {
    // 1. Оновлення часу в Menubar
    const dateTimeElement = document.querySelector('.date-time');

    function updateDateTime() {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        };
        // Форматуємо дату відповідно до локалі (українська)
        const formattedDate = now.toLocaleDateString('uk-UA', options).replace(',', '');
        dateTimeElement.textContent = formattedDate;
    }

    // Оновлюємо час одразу і потім кожну хвилину
    updateDateTime();
    setInterval(updateDateTime, 60000);

    // 2. Ефект "стрибка" в Dock (використовуємо CSS, але JS потрібен для динаміки)
    // Тут у нас вже є CSS-стилі :hover, тому JS потрібен для складніших ефектів,
    // як-от динамічне збільшення сусідніх елементів, але для простої імітації
    // достатньо CSS. Залишимо це для майбутнього розширення!
});