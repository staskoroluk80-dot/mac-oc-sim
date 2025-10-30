document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------
       1. ОНОВЛЕННЯ ЧАСУ В MENUBAR
    ------------------------------ */
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
        const formattedDate = now
            .toLocaleDateString('uk-UA', options)
            .replace(',', '');
        if (dateTimeElement) {
            dateTimeElement.textContent = formattedDate;
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 60000);

    /* -----------------------------
       2. ЕФЕКТ "СТРИБКА" В DOCK
    ------------------------------ */
    const dockItems = document.querySelectorAll('.dock-item');

    dockItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            // Додаємо клас анімації
            item.classList.add('active');
            
            // Плавне збільшення сусідніх іконок
            const prev = item.previousElementSibling;
            const next = item.nextElementSibling;
            if (prev) prev.classList.add('nearby');
            if (next) next.classList.add('nearby');
        });

        item.addEventListener('mouseleave', () => {
            // Прибираємо класи після короткої затримки
            setTimeout(() => {
                item.classList.remove('active');
                const prev = item.previousElementSibling;
                const next = item.nextElementSibling;
                if (prev) prev.classList.remove('nearby');
                if (next) next.classList.remove('nearby');
            }, 100);
        });
    });

    /* -----------------------------
       3. АВТОМАТИЧНЕ РОЗТАШУВАННЯ ІКОН НА РОБОЧОМУ СТОЛІ
    ------------------------------ */
    const desktopIcons = document.querySelectorAll('.desktop-icon');
    desktopIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        // Анімаційна поява
        setTimeout(() => {
            icon.style.transition = 'opacity 0.6s ease';
            icon.style.opacity = '1';
        }, 300 + index * 100);
    });

    /* -----------------------------
       4. ПЛАВНА ПОЯВА ІНТЕРФЕЙСУ (як macOS login fade-in)
    ------------------------------ */
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1.2s ease';
        document.body.style.opacity = '1';
    }, 200);

    /* -----------------------------
       5. КЛІК ПО ІКОНАХ НА РОБОЧОМУ СТОЛІ
    ------------------------------ */
    desktopIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const name = icon.getAttribute('data-name');
            console.log(`Clicked on: ${name}`);
            // Тут можна додати функціонал відкриття папок/файлів
        });
    });
});