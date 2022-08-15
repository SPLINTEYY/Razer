var menu = document.querySelector('nav');
var menuIcon = document.querySelector('.menu-icon');
var closeIcon = document.querySelector('.close-icon');
menuIcon.addEventListener(`click`,()=>{
      menu.classList.add('active');
});

closeIcon.addEventListener('click',()=>{
      menu.classList.remove('active');

});