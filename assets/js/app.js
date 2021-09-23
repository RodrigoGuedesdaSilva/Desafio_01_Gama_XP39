/* Funcionalidades do Menu */

const menu = document.querySelector('.hamburger-menu');
const menuLink = document.querySelector('.navbar-nav');

menu.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuLink.classList.toggle('is-active');
})
/*
document.onclick = function(e) {
    if(e.target !== menu && e.target !== menuLink) {
        menu.classList.remove('active');
        menuLink.classList.remove('is-active')
    }
}*/

/* Funcionalidades do Filtro da Seção Coleções */

var $grid = $('.colecao-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({filter:filterValue});
  });

  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns() {
      filterBtns.each(function() {
          $(this).removeClass('active-filter-btn');
      });
  }
