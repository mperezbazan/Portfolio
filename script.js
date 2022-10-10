
let closeBtn = document.querySelector('.close-button');

closeBtn.addEventListener('click', function(){
  alert('Hello');
  let mobileContainer = document.querySelector('.menu-mobile-container');
  mobileContainer.classList.toggle("sm-none");
  alert('Hello');
});

alert('Hello');