const closeBtn = document.querySelector('.close-button');
const mobileContainer = document.querySelector('.menu-mobile-container');
const hamburgerBtn = document.querySelector('#hamburger-button');
const menuBtn = document.querySelectorAll('.menu-button');
const toggleMenu = (e) => {
  e.stopPropagation();
  mobileContainer.classList.toggle('sm-none');
};
closeBtn.addEventListener('click', toggleMenu);
hamburgerBtn.addEventListener('click', toggleMenu);
menuBtn.forEach((item) => {
  item.addEventListener('click', toggleMenu);
});