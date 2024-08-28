document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const burgerMenu = document.getElementById('burger-menu');
    const wrapper = document.getElementById('wrapper');

    burgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        wrapper.classList.toggle('sidebar-hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-item');
    const mainContainer = document.getElementById('main-container');

    function handleClick(event) {
        event.preventDefault();
        mainContainer.classList.toggle('show');
        navLinks.removeEventListener('click', handleClick);
    }

    navLinks.addEventListener('click', handleClick);
});