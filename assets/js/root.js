AOS.init({ once: true });
const logo = document.querySelector('header .logo');
const nav = document.querySelector('header nav');

// Track state
let navVisible = false;
let logoClickable = false; // false = show dropdown, true = go to link

function updateNav() {
  if (window.innerWidth <970) {
    nav.classList.add('nav-hidden');
    logo.onclick = () => {
      if (!navVisible) {
        // Show dropdown
        nav.classList.remove('nav-hidden');
        nav.classList.add('nav-visible');
        addHideOption();
        navVisible = true;
        logoClickable = true;
      } else {
        // Follow link
        window.location.href = '/';
      }
    };
  } else {
    nav.classList.remove('nav-hidden');
    nav.classList.remove('nav-visible');
    navVisible = false;
    logoClickable = false;
  }
}

function addHideOption() {
  if (!document.querySelector('.hide-link')) {
    const hide = document.createElement('a');
    hide.classList.add('hide-link');
    hide.textContent = 'Hide';
    hide.style.padding = '0.5rem';
    hide.style.fontSize = '1.5rem';
    hide.style.cursor = 'pointer';
    hide.onclick = () => {
      nav.classList.remove('nav-visible');
      nav.classList.add('nav-hidden');
      navVisible = false;
      logoClickable = false;
      hide.remove();
    };
    nav.appendChild(hide);
  }
}

window.addEventListener('load', updateNav);
window.addEventListener('resize', updateNav);
