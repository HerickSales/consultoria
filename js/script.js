// ===== PRELOADER =====
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hidden');
    setTimeout(() => preloader.remove(), 500);
});

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');

const handleScroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll);

// ===== MOBILE NAVIGATION =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const animateElements = document.querySelectorAll('[data-animate]');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(el => observer.observe(el));

// ===== PLAN BUTTONS =====
const btnMensal = document.getElementById('btn-mensal');
const btnTrimestral = document.getElementById('btn-trimestral');

btnMensal?.addEventListener('click', () => {
    window.location.href = 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63767&page=63767';
});

btnTrimestral?.addEventListener('click', () => {
    window.location.href = 'https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63768&page=63767';
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
