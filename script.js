// ===============================
// CYBERPUNK TYPING EFFECT
// ===============================

const typingText = document.querySelector(".typing");

const words = [
    "WEB DEVELOPER",
    "GAME TESTER",
    "TECH ENTHUSIAST",
    "FRONTEND DEVELOPER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();


// ===============================
// NAVBAR GLOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background =
            "rgba(0,0,0,0.8)";

        nav.style.boxShadow =
            "0 0 25px rgba(0,255,255,0.4)";

    } else {

        nav.style.background =
            "rgba(0,0,0,0.3)";

        nav.style.boxShadow = "none";

    }

});


// ===============================
// CYBERPUNK SCROLL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".cyber-card, .skill-card, .project-card"
);

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// CYBER PARTICLES
// ===============================

const particleCount = 40;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        Math.random() * 100 + "vh";

    particle.style.animationDuration =
        Math.random() * 5 + 4 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    document.body.appendChild(particle);
}


// ===============================
// SMOOTH ACTIVE NAV LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


// ===============================
// IMAGE GLOW EFFECT
// ===============================

const imageFrame =
    document.querySelector(".image-frame");

imageFrame.addEventListener(
    "mousemove",
    () => {

        imageFrame.style.boxShadow = `
        0 0 20px #00ffff,
        0 0 40px #00ffff,
        0 0 80px #ff00ff
        `;
    }
);

imageFrame.addEventListener(
    "mouseleave",
    () => {

        imageFrame.style.boxShadow = `
        0 0 20px #00ffff,
        0 0 40px #00ffff,
        0 0 60px #00ffff
        `;
    }
);