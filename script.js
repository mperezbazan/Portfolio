const closeBtn = document.querySelector('.close-button');
const mobileContainer = document.querySelector('.menu-mobile-container');
const hamburgerBtn = document.querySelector('#hamburger-button');
const menuBtn = document.querySelectorAll('.menu-button');
function toggleMenu() {
  mobileContainer.classList.toggle('display-none');
}
closeBtn.addEventListener('click', toggleMenu);
hamburgerBtn.addEventListener('click', toggleMenu);
menuBtn.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});