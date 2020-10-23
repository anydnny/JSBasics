const openPop = document.querySelector('.request');
const pop = document.querySelector(".popup");
const closePop = document.querySelector('.closePopup');

openPop.addEventListener('click', function() {
  pop.style.display = 'flex';
});
closePop.addEventListener('click', function() {
  pop.style.display = 'none';
});

const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener('click', function(){
	menu.style.left = '0';
})
closeMenu.addEventListener('click', function(){
	menu.style.left = '-50vw';
});