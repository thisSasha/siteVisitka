document.querySelectorAll('a[href^="#N#"]').forEach(link => {

    link.onclick = function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(2);

        const scrollTarget = document.querySelector(href);

        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
});