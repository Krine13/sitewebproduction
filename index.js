function loadGTM() {
    const gtagScript = document.createElement('script');
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-5X5MRBBKP6";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5X5MRBBKP6');
    };
}

// Charger GTM au premier scroll / clic
window.addEventListener('scroll', loadGTM, {once: true});
window.addEventListener('click', loadGTM, {once: true});








document.addEventListener('DOMContentLoaded', () => {
    // ---------------- Hamburger Menu ----------------
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', (event) => {
            event.stopPropagation();
            menu.classList.toggle('open');
            hamburger.classList.toggle('open');
            hamburger.textContent = hamburger.classList.contains('open') ? '✕' : '☰';
        });

        // Ferme menu au clic sur un lien
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.textContent = '☰';
            });
        });

        // Ferme menu si clic en dehors
        document.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.textContent = '☰';
            }
        });
    }

    // ---------------- IntersectionObserver centralisé ----------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const cls = entry.target.dataset.activeClass || 'active';
            if (entry.isIntersecting) entry.target.classList.add(cls);
            else entry.target.classList.remove(cls);
        });
    }, { threshold: 0.4 });

    document.querySelectorAll(
        '.animate, .animation-fade-in, .image-anime, .firstContainer h1, .suiteContainer'
    ).forEach(el => observer.observe(el));

    // ---------------- Contenus cachés / toggle ----------------
    const togglePairs = [
        { trigger: '.referencement', content: '.hidden-content4' },
        { trigger: '.fusee', content: '.hidden-content5' }
    ];

    togglePairs.forEach(pair => {
        const trigger = document.querySelector(pair.trigger);
        const content = document.querySelector(pair.content);
        if (trigger && content) {
            trigger.addEventListener('click', () => {
                content.classList.add('visible');
                trigger.style.display = 'none';
            });
            content.addEventListener('click', () => {
                content.classList.remove('visible');
                trigger.style.display = 'block';
            });
        }
    });

    // ---------------- Scroll pour ajouter 'visible' ----------------
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                document.querySelectorAll('.hidden-content,.suiteContainer2 h2, .container4 .titre4').forEach(el => {
                    const pos = el.getBoundingClientRect();
                    if (pos.top < window.innerHeight && pos.bottom >= 0) {
                        el.classList.add('visible');
                    }
                });
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // ---------------- Toggle Resume ----------------
    window.toggleResume = function() {
        const wrapper = document.getElementById('resumeWrapper');
        if (wrapper) wrapper.classList.toggle('visible');
    };

    window.showSection = function(id) {
        const sections = document.querySelectorAll('.resume-section');
        sections.forEach(s => s.classList.remove('active'));
        const target = document.getElementById(id);
        if (target) target.classList.add('active');
    };

    // ---------------- Toggle text ----------------
    function toggleTextDisplay(moreText, link) {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.setProperty('display', 'inline', 'important');
            link.textContent = 'Lire moins';
        } else {
            moreText.style.setProperty('display', 'none', 'important');
            link.textContent = (link.dataset.target === 'moreText1') ? 'Les coulisses du SEO' : 'En savoir plus';
        }
    }

    document.querySelectorAll('.toggle-link').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.dataset.target;
            const moreText = document.getElementById(targetId);
            if (moreText) toggleTextDisplay(moreText, button);
        });
    });

    // ---------------- Redimensionnement pour hidden-text ----------------
    function handleResize() {
        if (window.innerWidth > 480) {
            document.querySelectorAll('.hidden-text').forEach(el => el.style.display = 'inline');
        }
    }
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    // ---------------- Toggle stratégie ----------------
    document.querySelectorAll('.strategie').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content) {
                button.classList.toggle('active');
                content.classList.toggle('active');
            }
        });
    });

    // ---------------- Toggle détails ----------------
    document.querySelectorAll('.deuxieme').forEach(detail => {
        detail.addEventListener('click', function () {
            const hiddenContent = this.nextElementSibling;
            if (hiddenContent && hiddenContent.classList.contains('hidden-content1')) {
                const isVisible = hiddenContent.style.display === 'block';
                document.querySelectorAll('.hidden-content1').forEach(c => {
                    c.style.display = 'none';
                    c.previousElementSibling.classList.remove('active');
                    const arrow = c.previousElementSibling.querySelector('.arrow');
                    if (arrow) arrow.innerHTML = '&#9660;';
                });
                if (!isVisible) {
                    hiddenContent.style.display = 'block';
                    this.classList.add('active');
                    const arrow = this.querySelector('.arrow');
                    if (arrow) arrow.innerHTML = '&#9650;';
                }
            }
        });
    });

    // ---------------- Animation "details" ----------------
    const monBlocDetails = document.querySelector('.details');
    if (monBlocDetails) {
        let aDéjàDéclenché = false;
        const observerPerso = new IntersectionObserver(observations => {
            const obs = observations[0];
            if (obs.isIntersecting && !aDéjàDéclenché) {
                monBlocDetails.classList.add('active');
                aDéjàDéclenché = true;
                setTimeout(() => {
                    monBlocDetails.classList.remove('active');
                    aDéjàDéclenché = false;
                }, 2200);
            }
        }, { threshold: 0.48 });
        observerPerso.observe(monBlocDetails);
    }

    // ---------------- Sommaire ----------------
    document.querySelectorAll('.sommaire1 .item').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target;
            const bloc = document.getElementById(targetId);
            if (!bloc) return;
            document.querySelectorAll('.bloc').forEach(b => {
                if (b !== bloc) b.classList.remove('active');
            });
            bloc.classList.toggle('active');
        });
    });

    // ---------------- Modale ----------------
    const openBtn = document.getElementById('open-form');
    const closeBtn = document.getElementById('close-form');
    const modal = document.getElementById('popup-form');

    if (openBtn && closeBtn && modal) {
        openBtn.addEventListener('click', () => modal.style.display = 'block');
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', event => {
            if (event.target === modal) modal.style.display = 'none';
        });
    }
});

