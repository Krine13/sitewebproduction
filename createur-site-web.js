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











document.addEventListener('DOMContentLoaded', function() {
  function toggleTextDisplay(moreText, link) {
    // Avant le changement de display, on log
    console.log('Avant changement, display:', moreText.style.display); 

    // Ici on vérifie la valeur de display, mais on va aussi manipuler le style direct
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.setProperty('display', 'inline', 'important'); // Force l'affichage du texte avec !important
      link.textContent = 'Lire moins'; // Change le texte du lien
    } else {
      moreText.style.setProperty('display', 'none', 'important'); // Force la disparition du texte avec !important
      link.textContent = 'Lire la suite'; // Réinitialise le texte du lien
    }

    // Après le changement, on log
    console.log('Après changement, display:', moreText.style.display);
  }

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
  function handleResize() {
    if (window.innerWidth > 480) {
      document.querySelectorAll('.hidden-text').forEach(el => {
        el.style.display = 'inline'; // Assure que le texte est toujours visible sur grand écran
      });
    }
  }

  // Vérifie la taille d'écran au chargement et au redimensionnement
  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);
});



  document.addEventListener("DOMContentLoaded", () => {
    const texteElements = document.querySelectorAll('.texteContainer h2');
    console.log(document.querySelector('.texteContainer h2, .texteContainer h2::before'));

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

    
      const animEtirer = document.querySelector('.prestations'); // Sélectionne l'élément
    
      if (!animEtirer) {
          console.error("❌ Aucun élément .prestations trouvé !");
          return;
      }
    
      console.log("✅ Élément trouvé :", animEtirer);
  
      const etirer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              console.log("🔎 Vérification d'intersection :", entry.target, entry.isIntersecting);
  
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
                  console.log("✅ Classe 'active' ajoutée !");
              } else {
                  entry.target.classList.remove('active');
                  console.log("❌ Classe 'active' retirée !");
              }
          });
      }, { threshold: 0.5 });
  
      etirer.observe(animEtirer);

      const animRelief = document.querySelectorAll('.paragraphe1, .paragraphe2'); // Sélectionne l'élément
    
      if (!animRelief) {
          console.error("❌ Aucun élément .prestations trouvé !");
          return;
      }
    
      console.log("✅ Élément trouvé :", animEtirer);
  
      
        const elementsRelief = document.querySelectorAll('.paragraphe2');
    
        const relief = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log("🔎 Vérification d'intersection :", entry.target, entry.isIntersecting);
        
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    console.log("✅ Classe 'active' ajoutée !");
                } else {
                    entry.target.classList.remove('active');
                    console.log("❌ Classe 'active' retirée !");
                }
            });
        }, { threshold: 0.01 });
    
        elementsRelief.forEach(element => relief.observe(element));

        const elementsShake = document.querySelectorAll('.colonne1 h3, .colonne2 h3, .colonne3 h3, .colonne4 h3, .colonne5 h3');
    
        const shake = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log("🔎 Vérification d'intersection :", entry.target, entry.isIntersecting);
        
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    console.log("✅ Classe 'active' ajoutée !");
                } else {
                    entry.target.classList.remove('active');
                    console.log("❌ Classe 'active' retirée !");
                }
            });
        }, { threshold: 0.5 });
    
        elementsShake.forEach(element => shake.observe(element));
    });

    
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Ajoute la classe active
      } else {
        entry.target.classList.remove('active'); // Retire la classe active si l'élément sort de la vue
      }
    });
  }, { threshold: 0.1 }); // Déclenche l'activation quand 50% de l'élément est visible
  
  // Sélectionne tous les éléments à observer

  const configElements = document.querySelectorAll('.config1, .config2, .config3');
  
  // Observe chaque élément
  configElements.forEach(element => {
    observer.observe(element);
  });

 
   
  
  

    
  