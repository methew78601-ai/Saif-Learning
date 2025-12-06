// ====== MOBILE NAVBAR TOGGLE ======
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
    menuBtn.classList.toggle("fa-times");
  });

  // Close nav when clicking a link (mobile)
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      menuBtn.classList.remove("fa-times");
    });
  });
}

// ====== TYPING EFFECT IN HERO ======
const roles = ["a Coder", "a Graphics Designer", "a Web Developer", "a Creative Thinker","a Professional Accountant"];
const typingSpan = document.querySelector(".typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!typingSpan) return;

  const current = roles[roleIndex];
  const speed = isDeleting ? 70 : 120;

  typingSpan.textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 900);
      return;
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, speed);
}

if (typingSpan) {
  typeLoop();
}

// ====== SCROLL REVEAL ANIMATION ======
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.83;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);



document.getElementById("callBtn").addEventListener("click", function () {
    window.location.href = "tel:8171342516";
});
