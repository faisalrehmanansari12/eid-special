const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach(element => observer.observe(element));

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
  }
});

const heartsContainer = document.querySelector(".floating-hearts");

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("span");
  heart.textContent = Math.random() > 0.5 ? "♡" : "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.fontSize = 14 + Math.random() * 24 + "px";
  heart.style.opacity = 0.35 + Math.random() * 0.55;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

setInterval(createHeart, 650);

const loveButton = document.getElementById("loveButton");
const hiddenMessage = document.getElementById("hiddenMessage");

if (loveButton && hiddenMessage) {
  loveButton.addEventListener("click", () => {
    hiddenMessage.classList.add("show");
    loveButton.textContent = "Patch Applied ❤️";
    launchConfetti();
  });
}

function launchConfetti() {
  const symbols = ["❤", "♡", "✦", "✨", "🌙"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    piece.style.fontSize = 14 + Math.random() * 22 + "px";
    piece.style.color = Math.random() > 0.5 ? "#ffd37a" : "#ff79b0";

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4500);
  }
}
