
    // Sélectionne tous les liens qui déclenchent l'affichage du texte
   /* document.querySelectorAll('[id^="toggleText"]').forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche l'actualisation de la page
        const targetId = this.getAttribute('data-target'); // Récupère l'ID du texte à afficher
        const moreText = document.getElementById(targetId); // Trouve l'élément correspondant
  
        if (!moreText) {
          console.error(`Element with id "${targetId}" not found.`); // Affiche une erreur si l'élément cible n'est pas trouvé
          return;
        }
  
        // Toggle l'affichage du texte
        if (moreText.style.display === 'none') {
          moreText.style.display = 'inline'; // Affiche le texte
          this.textContent = 'Lire moins'; // Change le texte du lien
        } else {
          moreText.style.display = 'none'; // Masque le texte
          this.textContent = 'Lire la suite'; // Réinitialise le texte du lien
        }
      });
    });*/
    
    // Fonction pour détecter les éléments dans la fenêtre
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
      // Ajout de l'événement click sur l'icône hamburger
      hamburger.addEventListener("click", function () {
          // Ajoute ou retire la classe 'active' pour afficher/masquer le menu
          menu.classList.toggle("active");

          // Cache l'icône hamburger lorsque le menu est ouvert
          if (menu.classList.contains("active")) {
              hamburger.style.display = "none";  // Cacher l'icône hamburger
          } else {
              hamburger.style.display = "block";  // Réafficher l'icône hamburger
          }
      });

      // Fermer le menu si on clique à l'extérieur du menu (optionnel)
      document.addEventListener("click", function (event) {
          // Vérifie si le clic a été fait en dehors du menu et de l'icône hamburger
          if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
              menu.classList.remove("active");  // Ferme le menu
              hamburger.style.display = "block";  // Réaffiche l'icône hamburger
          }
      });
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
      }, { threshold: 0.2 });
    
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
      
      

      const elements = document.querySelectorAll('.suiteContainer2 h2, .container4 .titre4'); // Sélectionne tous les éléments correspondants
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


  
          
      
      
  

