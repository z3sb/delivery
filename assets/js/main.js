/* ================== Show Menu ================== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
  
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    })
  }
}
showMenu('nav-toggle', 'nav-menu');

/* ================== Remove Menu Mobile ================== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/* ================== Scroll Section Active Link ================== */


/* ================== Change Background Header ================== */


/* ================== Show Scroll up ================== */


/* ================== Dark Light Theme ================== */