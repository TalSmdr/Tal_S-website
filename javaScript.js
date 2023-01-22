document.querySelectorAll('.grid-container a').forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        window.open(event.target.href);
    })
});