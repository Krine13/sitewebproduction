const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');

    // Change le contenu textuel entre hamburger et croix
    if (hamburger.classList.contains('open')) {
        hamburger.textContent = '✕';  // croix
    } else {
        hamburger.textContent = '☰';  // hamburger
    }
    
});


// Ferme menu au clic sur un lien
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.textContent = '☰';
    });
});

// Ferme menu si clic en dehors du menu et hamburger
document.addEventListener('click', () => {
    if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.textContent = '☰';
    }
});

