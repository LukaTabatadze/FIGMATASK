$(document).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
    });
  
    $('.dropdown').on('show.bs.dropdown', function(){
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
  
    $('.dropdown').on('hide.bs.dropdown', function(){
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
  });