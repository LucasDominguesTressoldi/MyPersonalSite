var menuBar = document.querySelector('.burguer_icon');

menuBar.addEventListener('click', ()=>{
  let menuMobile = document.querySelector('.menu_content_container');
  if (menuMobile.classList.contains('show_menu')) {
    menuMobile.classList.remove('show_menu');
  } else {
    menuMobile.classList.add('show_menu');
  }
})
