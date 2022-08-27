const menuToggle = document.querySelector('#toggleMenu')
const menuSlide = document.querySelector('.menuSlide')

menuToggle.addEventListener('click', function(){
  menuSlide.classList.toggle('active')
})