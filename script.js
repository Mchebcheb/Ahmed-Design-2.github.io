document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const dropdown = document.querySelector('.dropdown');

    // Abrir/Cerrar menú hamburguesa
    menuBtn.onclick = () => {
        navMenu.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
    };

    // Manejar submenú en móvil
    dropdown.onclick = (e) => {
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('open');
        }
    };
});
