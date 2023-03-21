import gsap from "gsap";

$(document).ready(function() {
  
  // Маска для телефона
  var selector = $('input[type="tel"]');

  var im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);


  // Анимация открытия поля поиска
  const searchField = document.querySelector('.for-form');
  const searchFieldOpen = document.querySelectorAll('.js-searchOpen');


  var tl2 = gsap.timeline({paused:true}); 
 
  tl2.fromTo(searchField, {transform: 'translateX(302%)'}, {duration:1.2, ease: "power3.in", transform: 'translateX(0)'});
  
  searchFieldOpen.forEach(function(oneOpenSearch){
    oneOpenSearch.onclick = function(){
      tl2.play();
    }
  }); 

  document.querySelector('.js-closeSearch').addEventListener('click', function() {
    tl2.reverse();
  });

 
  // попапы popups
  $(function() {
    // Открытие / закрытие попапов
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);        
        e.preventDefault();

    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350); 
        errorFieldResest();  
        e.preventDefault();
    });

    $('.popup').on('click', function(event) {
        if( this == event.target) {
        $('.popup').fadeOut(350);
        errorFieldResest();        
        }
    });
  });

  // Открытие бургерного меню
  var menu = $('.header-menu')
  ,burger = $('.burger')  
  ,flag = false; 


  burger.on('click', function(){      
  if(!flag) {
      menu.fadeIn('200', function() {
        $(this).css('display', 'flex');
      });
      $('body').addClass('closed');
      flag = true; 
  } else {
    menu.fadeOut('300');
    $('body').removeClass('closed');
      flag = false;        
  }       

  burger.toggleClass('open');

  // Скрытие меню при нажатии на один из пунктов меню

  $('.header-menu__item a').each(function(){
    $(this).on('click', function(e){       
      e.preventDefault();
        menu.fadeOut('300');
        flag = false; 
        $('body').removeClass('closed');             
        burger.removeClass('open');
    });
  });

  

  });
   
});