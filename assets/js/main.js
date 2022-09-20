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
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const 
      sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      if(document.querySelector('.nav__menu a[href*="#' + sectionId + '"]')){
        document.querySelector('.nav__menu a[href*="#' + sectionId + '"]').classList.add('active-link');
      }
    } else{
      if(document.querySelector('.nav__menu a[href*="#' + sectionId + '"]')){
        document.querySelector('.nav__menu a[href*="#' + sectionId + '"]').classList.remove('active-link');
      }
    }
  })
}
window.addEventListener('scroll', scrollActive)
/* ================== Change Background Header ================== */
function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)
/* ================== Show Scroll up ================== */
const scrollUpButton = document.getElementById('scroll-up');
function scrollUp() {
  if (this.scrollY >= 560) scrollUpButton.classList.add('show-scroll'); else scrollUpButton.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
scrollUpButton.addEventListener('click', () => window.scrollTo(0, 0))
/* ================== Dark Light Theme ================== */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})