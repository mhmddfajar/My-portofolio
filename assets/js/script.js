/* ===============================
   SMOOTH SCROLL NAVBAR
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


/* ===============================
   REVEAL ON SCROLL
================================ */
const reveals = document.querySelectorAll(".section, .hero-content, .project-card");

const revealOnScroll = () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ===============================
   ACTIVE NAVBAR LINK
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


/* ===============================
   HERO PARALLAX EFFECT
================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (hero) {
        hero.style.backgroundPositionY = scrollY * 0.4 + "px";
    }
});


/* ===============================
   PROJECT CARD STAGGER EFFECT
================================ */
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});


/* ===============================
   OPTIONAL: SCROLL TO TOP BUTTON
================================ */
// Aktifkan jika kamu mau (harus ada tombolnya di HTML)
/*
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
*/
