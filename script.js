const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Typing effect with logos
const typingText = document.getElementById("typing-text-with-logo");
const words = ["HTML", "CSS", "PHP", "C++", "C#", "Javascript", "Python", "SQL", "GO"];
const logos = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "GO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
};

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  // Inject logo + text
  typingText.innerHTML = `
    <img src="${logos[currentWord]}" alt="${currentWord}" style="height: 24px; vertical-align: middle; margin-right: 8px;">
    ${currentText}
  `;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);
