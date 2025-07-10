
    
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






document.addEventListener('DOMContentLoaded', () => {
      const texteElements = document.querySelectorAll('.firstContainer h1');
      console.log(document.querySelector('.firstContainer h1, .firstContainer h1::before'));
  
      const animate = new IntersectionObserver((entries) => {
          entries.forEach((entry, index) => {
              console.log("Vérification d'intersection :", entry.target, entry.isIntersecting);
  
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  console.log("✅ Classe 'active' ajoutée à :", entry.target);
                } else {
                  entry.target.classList.remove('active'); // 🔄 Supprime la classe quand il sort de l'écran
                  console.log("❌ Classe 'active' retirée de :", entry.target);
              }
          });
      }, { threshold: 0 });
  
      texteElements.forEach(element => {
          animate.observe(element);
      });
  
     const trigger = document.querySelector('.referencement');
const content = document.querySelector('.hidden-content4');

trigger.addEventListener('click', function () {
  content.classList.add('visible');
  trigger.style.display = 'none';
});

content.addEventListener('click', function () {
  content.classList.remove('visible');
  trigger.style.display = 'block';
});
      
  const trigger2 = document.querySelector('.fusee');
const contenu2 = document.querySelector('.hidden-content5');

trigger2.addEventListener('click', function () {
  contenu2.classList.add('visible');
  trigger2.style.display = 'none';
});

contenu2.addEventListener('click', function () {
  contenu2.classList.remove('visible');
  trigger2.style.display = 'block';
}); 
    
    
  


    
      const animatedElements = document.querySelectorAll(".animate");
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          console.log("Observed element:", entry.target); // Log pour vérifier l'élément surveillé
          if (entry.isIntersecting) {
            console.log("Element visible:", entry.target); // Log pour vérifier quand l'élément devient visible
            entry.target.classList.add("active");
            
          } else {
            entry.target.classList.remove("active");
          }
        });
      }, { threshold: 0.4});
    
      animatedElements.forEach((el) => observer.observe(el));
    
      const suiteContainer = document.querySelector(".suiteContainer");

      // Fonction qui déclenche l'animation de rebond
      function handleVisibilityChange(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Si l'élément est visible, ajoute la classe active pour démarrer l'animation
            entry.target.classList.add("active");
          } else {
            // Si l'élément n'est plus visible, retire la classe active pour pouvoir réinitialiser l'animation
            entry.target.classList.remove("active");
          }
        });
      }
    
      // Assure-toi que ton observer est déjà bien configuré quelque part dans ton code
      const lookat = new IntersectionObserver(handleVisibilityChange, { threshold: 0.5 });
      lookat.observe(suiteContainer);

      const animations = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const animation = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible'); // Ajoute la classe quand visible
              } else {
                  entry.target.classList.remove('visible'); // Retire la classe quand hors du viewport
              }
          });
      },
      { threshold: 0.1 } // Détecte lorsque 10% de l'élément est visible
  );

  const elementsToAnimate = document.querySelectorAll('.animation-fade-in, .image-anime');
  elementsToAnimate.forEach((el) => {
      animation.observe(el);
  });
});

let isScrolling = false;

window.addEventListener('scroll', function() {
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      
      

      const elements = document.querySelectorAll('.hidden-content,.suiteContainer2 h2, .container4 .titre4'); // Sélectionne tous les éléments correspondants
      console.log(window.getComputedStyle(document.querySelector('.container4 .titre4'), '::before').transition);
      elements.forEach(element => {
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('visible');
          console.log("Classe 'visible' ajoutée !");
          setTimeout(() => {
            console.log('Après ajout de visible:', window.getComputedStyle(element).transform);
          }, 500);
        }
      });

     isScrolling = false;
    });
    isScrolling = true;
  }
});


  // Lorsque l'utilisateur clique sur le bouton principal
  /*document.getElementById('toggleApproche').addEventListener('click', function(e) {
    e.preventDefault();
    const contenu = document.getElementById('contenuApproche');
    contenu.classList.toggle('visible');
    this.textContent = contenu.classList.contains('visible') 
      ? '▲ Réduire'
      : '🌱 Pourquoi me faire confiance ?';
  });*/
function toggleResume() {
  const wrapper = document.getElementById('resumeWrapper');
  wrapper.classList.toggle('visible');
}

// Quand on clique sur une ancre
function showSection(id) {
  const sections = document.querySelectorAll('.resume-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}
  

document.addEventListener('DOMContentLoaded', function() {
  function toggleTextDisplay(moreText, link) {
      // Avant le changement de display, on log
      console.log('Avant changement, display:', moreText.style.display);

      // Vérifie la valeur de display et bascule l'affichage
      if (moreText.style.display === 'none' || moreText.style.display === '') {
          moreText.style.setProperty('display', 'inline', 'important'); // Force l'affichage du texte
          link.textContent = 'Lire moins'; // Change le texte du lien
      } else {
          moreText.style.setProperty('display', 'none', 'important'); // Cache le texte
          link.textContent = (link.getAttribute('data-target') === 'moreText1') ? 'Les coulisses du SEO' : 'En savoir plus'; // Réinitialise le texte du lien
      }

      // Après le changement, on log
      console.log('Après changement, display:', moreText.style.display);
  }

  // Sélectionne tous les liens avec la classe 'toggle-link'
  document.querySelectorAll('.toggle-link').forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Empêche le rechargement de la page
          
          const targetId = this.getAttribute('data-target'); // Récupère l'ID du texte à afficher
          const moreText = document.getElementById(targetId); // Trouve l'élément correspondant

          if (!moreText) {
              console.error(`Element with id "${targetId}" not found.`); // Affiche une erreur si l'élément cible n'est pas trouvé
              return;
          }

          toggleTextDisplay(moreText, this); // Appel de la fonction pour basculer l'affichage
      });
  });

  // Fonction pour gérer le resize
  function handleResize() {
      if (window.innerWidth > 480) {
          document.querySelectorAll('.hidden-text').forEach(el => {
              el.style.display = 'inline'; // Assure que le texte est toujours visible sur grand écran
          });
      }
  }

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);
});
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

document.addEventListener('DOMContentLoaded', function() {
  const monBlocDetails = document.querySelector('.details');

  if (monBlocDetails) {
    let aDéjàDéclenché = false;

    const observerPerso = new IntersectionObserver(function(observations) {
      const observation = observations[0];
      if (observation.isIntersecting && !aDéjàDéclenché) {
        monBlocDetails.classList.add('active');
        aDéjàDéclenché = true;

        setTimeout(function() {
          monBlocDetails.classList.remove('active');
          aDéjàDéclenché = false;
        }, 2200); // temps légèrement supérieur à l'animation
      }
    }, {
      root: null,
      threshold: 0.48
    });

    observerPerso.observe(monBlocDetails);
  }
});

 document.querySelectorAll('.sommaire1 .item').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const bloc = document.getElementById(targetId);

    if (!bloc) return;

    // On ferme tous les blocs sauf celui cliqué
    document.querySelectorAll('.bloc').forEach(b => {
      if (b !== bloc) b.classList.remove('active');
    });

    // On toggle le bloc cliqué
    bloc.classList.toggle('active');
  });
});