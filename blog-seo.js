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



 
 
 
 
 
 
 function handleResize() {
      if (window.innerWidth > 480) {
          document.querySelectorAll('.hidden-text').forEach(el => {
              el.style.display = 'inline'; // Assure que le texte est toujours visible sur grand écran
          });
      }
  }

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);

// Cibler tous les éléments avec la classe .strategie
 document.querySelectorAll('.strategie').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      button.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
  
const details = document.querySelectorAll('.deuxieme');

details.forEach((detail) => {
  detail.addEventListener('click', function () {
    const hiddenContent = this.nextElementSibling;

    if (hiddenContent && hiddenContent.classList.contains('hidden-content1')) {
      const isVisible = hiddenContent.style.display === 'block';

      // Fermer tous les autres contenus
      document.querySelectorAll('.hidden-content1').forEach(content => {
        content.style.display = 'none';
        content.previousElementSibling.classList.remove('active');
        const arrow = content.previousElementSibling.querySelector('.arrow');
        if (arrow) arrow.innerHTML = '&#9660;'; // Flèche vers le bas
      });

      // Ouvrir ou fermer le contenu cliqué
      if (!isVisible) {
        hiddenContent.style.display = 'block';
        this.classList.add('active');
        const arrow = this.querySelector('.arrow');
        if (arrow) arrow.innerHTML = '&#9650;'; // Flèche vers le haut
      }
    }
  });
});
function toggleResume() {
  const content = document.querySelector('.hidden-content1');
  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".sommaire .item");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");

      // Fermer tous les blocs déjà affichés
      document.querySelectorAll(".bloc-affiche").forEach(bloc => bloc.remove());

      // Clone le bloc cible depuis la zone cachée
      const hiddenBloc = document.getElementById(targetId);
      if (hiddenBloc) {
        const clone = hiddenBloc.cloneNode(true);
        clone.classList.add("bloc-affiche");
        clone.style.display = "block";

        // Insérer juste après l'élément cliqué
        item.parentNode.insertBefore(clone, item.nextSibling);
      }
    });
  });
});