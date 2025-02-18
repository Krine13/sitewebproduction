


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
  

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    const recaptchaResponse = grecaptcha.getResponse(); // Récupère la réponse du reCAPTCHA
   
       if (recaptchaResponse.length === 0) {
           alert("Merci de valider le reCAPTCHA avant d'envoyer le formulaire.");
           event.preventDefault(); // Empêche l'envoi du formulaire
       }
   });