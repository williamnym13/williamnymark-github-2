document.addEventListener('keydown', function (event) {
    const links = document.querySelectorAll('.nav-item a');
    const focusableLinks = Array.from(links);
    const currentIndex = focusableLinks.findIndex(link => document.activeElement === link);

    if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % focusableLinks.length;
        focusableLinks[nextIndex].focus();
        event.preventDefault();
    }
    else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + focusableLinks.length) % focusableLinks.length;
        focusableLinks[prevIndex].focus();
        event.preventDefault();
    }
});