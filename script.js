(function () {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;

        if ((page === '' && href === 'index.html') || page === href) {
            a.classList.add('active');
        }
    });
})();
