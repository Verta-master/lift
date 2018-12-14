jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});
  
$('.sidebar__option').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('sidebar__option--up');
  $(this).next().slideToggle();
});
  
if (window.innerWidth < 766) {
  $('.sidebar__option').addClass('sidebar__option--up');
  $('.sidebar__field').slideUp();
}

});
