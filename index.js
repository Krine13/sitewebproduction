document.addEventListener('DOMContentLoaded', () => {

  // ======== MENU HAMBURGER ========
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.textContent = hamburger.classList.contains('open') ? '✕' : '☰';
  });

  // Fermer menu au clic sur un lien
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });

  // Fermer menu si clic en dehors
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== hamburger) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.textContent = '☰';
    }
  });


  // ======== ANIMATIONS INTERSECTION OBSERVER ========
  const animatedElements = document.querySelectorAll(
    '.animate, .animation-fade-in, .image-anime, .hidden-content, .suiteContainer2 h2, .container4 .titre4, .firstContainer h1, .suiteContainer, .details'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.4 });

  animatedElements.forEach(el => observer.observe(el));


  // ======== TOGGLE CONTENU "Lire plus" ========
  function toggleTextDisplay(moreText, link) {
    const isHidden = moreText.style.display === 'none' || moreText.style.display === '';
    moreText.style.setProperty('display', isHidden ? 'inline' : 'none', 'important');
    link.textContent = isHidden 
      ? 'Lire moins' 
      : (link.getAttribute('data-target') === 'moreText1' ? 'Les coulisses du SEO' : 'En savoir plus');
  }

  document.querySelectorAll('.toggle-link').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = button.getAttribute('data-target');
      const moreText = document.getElementById(targetId);
      if (!moreText) return;
      toggleTextDisplay(moreText, button);
    });
  });


  // ======== ACCORDÉONS ========
  document.querySelectorAll('.strategie').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      button.classList.toggle('active');
      content.classList.toggle('active');
    });
  });

  document.querySelectorAll('.deuxieme').forEach(detail => {
    detail.addEventListener('click', () => {
      const hiddenContent = detail.nextElementSibling;
      if (!hiddenContent || !hiddenContent.classList.contains('hidden-content1')) return;

      const isVisible = hiddenContent.style.display === 'block';

      document.querySelectorAll('.hidden-content1').forEach(c => {
        if (c !== hiddenContent) {
          c.style.display = 'none';
          c.previousElementSibling.classList.remove('active');
          const arrow = c.previousElementSibling.querySelector('.arrow');
          if (arrow) arrow.innerHTML = '&#9660;';
        }
      });

      hiddenContent.style.display = isVisible ? 'none' : 'block';
      detail.classList.toggle('active', !isVisible);
      const arrow = detail.querySelector('.arrow');
      if (arrow) arrow.innerHTML = isVisible ? '&#9660;' : '&#9650;';
    });
  });


  // ======== POP-UP FORMULAIRE ========
  const openBtn = document.getElementById('open-form');
  const closeBtn = document.getElementById('close-form');
  const modal = document.getElementById('popup-form');

  if(openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.style.display = 'block');
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }


  // ======== SCROLL OPTIMISÉ ========
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const scrollElements = document.querySelectorAll('.hidden-content,.suiteContainer2 h2, .container4 .titre4');
        scrollElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
          }
        });
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

});
