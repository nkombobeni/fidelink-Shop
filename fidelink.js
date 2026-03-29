// ================= NAVBAR =================
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
  const btn = drop.querySelector(".dropdown-toggle");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdowns.forEach(d => {
      if (d !== drop) d.classList.remove("active");
    });

    drop.classList.toggle("active");
  });
});

// fermer dropdown si clic extérieur
window.addEventListener("click", () => {
  dropdowns.forEach(d => d.classList.remove("active"));
});

// menu mobile
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= HERO SLIDER =================
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".arrow.right");
const prev = document.querySelector(".arrow.left");

let index = 0;
let interval;

function showSlide(i){
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// autoplay
function startAuto(){
  interval = setInterval(nextSlide, 5000);
}

// pause hover (UX pro)
document.querySelector(".hero").addEventListener("mouseenter", () => {
  clearInterval(interval);
});

document.querySelector(".hero").addEventListener("mouseleave", () => {
  startAuto();
});

startAuto();


// Pause animation au hover (pro UX)
const promo = document.querySelector(".promo-track");

document.querySelector(".promo-slider").addEventListener("mouseenter", () => {
  promo.style.animationPlayState = "paused";
});

document.querySelector(".promo-slider").addEventListener("mouseleave", () => {
  promo.style.animationPlayState = "running";
});


const products = [
    {
        name: "Xiaomi Vacuum Mop",
        price: "398,99€",
        img: "img1.jpg",
        link: "https://ton-lien1.com"
    },
    {
        name: "Irobot Roomba",
        price: "372,54€",
        img: "img2.jpg",
        link: "https://ton-lien2.com"
    }
];

console.log("Catalogue prêt");



// Animation au scroll
const cta = document.getElementById("cta");

window.addEventListener("scroll", () => {
    const position = cta.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
        cta.classList.add("active");
    }
});

// Effet bouton (clic)
const btn = document.querySelector(".cta-btn");

btn.addEventListener("click", () => {
    btn.innerText = "Chargement...";
});