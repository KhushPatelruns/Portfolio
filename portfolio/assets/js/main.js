window.addEventListener("load", () => {
  // === Loader Fade-Out ===
  setTimeout(() => {
    document.querySelector(".loader")?.classList.add("fade-out");

    // === Logo Typing Animation ===
    setTimeout(() => {
      const typedLogo = document.getElementById("typed-logo");
      const logoText = "KHUSH'S PORTFOLIO";
      let i = 0;
      const typeLogo = () => {
        if (i < logoText.length) {
          typedLogo.textContent += logoText[i++];
          setTimeout(typeLogo, 30);
        }
      };
      typeLogo();
    }, 100);
  }, 1500);

  // === Loader Rotating Phrases ===
  const typedText = document.querySelector(".typed-text");
  const phrases = [
    "Welcome to Khush's Portfolio!",
    "Mechanical Engineering | Robotics",
    "Computer Vision Enthusiast",
    "Precision Control Systems",
    "Simulation & Automation"
  ];
  let phraseIndex = 0;

  const typePhrase = () => {
    typedText.textContent = "";
    const phrase = phrases[phraseIndex];
    let i = 0;
    const interval = setInterval(() => {
      typedText.textContent += phrase[i++];
      if (i === phrase.length) {
        clearInterval(interval);
        setTimeout(() => {
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typePhrase();
        }, 1000);
      }
    }, 50);
  };

  typePhrase();

  // === Navbar Scroll Shadow ===
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });

  // === Dark Mode Toggle ===
  const darkToggle = document.getElementById("darkToggle");
  const darkClass = "dark-mode";
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add(darkClass);
  }
  darkToggle?.addEventListener("click", () => {
    document.body.classList.toggle(darkClass);
    localStorage.setItem(
      "theme",
      document.body.classList.contains(darkClass) ? "dark" : "light"
    );
  });

  // === Mobile Menu Toggle ===
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // === Auto-Close Dropdown on Link Click ===
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // === Skill Bar Animation ===
  document.querySelectorAll(".fill").forEach((fill) => {
    const targetWidth = fill.getAttribute("data-width");
    if (targetWidth) {
      fill.style.width = "0%";
      fill.style.transition = "width 1.5s ease-in-out";
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 500);
    }
  });
});
document.querySelector(".terminal-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const res = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (res.ok) {
    form.reset();
    showMessage("> Message sent successfully!");
  } else {
    showMessage("> Oops, something went wrong.", true);
  }
});

function showMessage(text, isError = false) {
  const msg = document.createElement("p");
  msg.textContent = text;
  msg.style.color = isError ? "#ff5555" : "#00ffcc";
  msg.style.textShadow = isError ? "0 0 5px #ff5555" : "0 0 5px #00ffcc";
  document.querySelector("#contact").appendChild(msg);
}

