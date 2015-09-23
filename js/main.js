

$(document).ready(function(){


/*--- Album Players ---*/

  $('#play1').click(function(){
      $('#player1').fadeIn(500);
      $('#close1'),fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#close1').click(function(){
      $('#player1').fadeOut(500);
      $('#play1').fadeIn(500);
      $(this).css('display', 'none');
  });




/*--- Dropdown Menu Functionality ---*/


/* -------- Hamburger ----------- */

  $('.hamburger').click(function(){
    $('.mobile-nav').slideDown(500);
    $(this).css("display", "none")
    $('.x').css("display", 'inline-block')
  });

    $('.x').click(function(){
    $('.mobile-nav').slideUp(500);
    $(this).css("display", "none")
    $('.hamburger').css("display", 'inline-block')
  });



// ------ Media Queries ------ //

  enquire.register("screen and (min-width:1100px)",{
    match : function() {
      $('.mobile-nav').css('display', 'none')
      $('.x').css('display','none')
      $('.hamburger').css('display', 'none')
    },
    unmatch : function() {
      $('.hamburger').css('display', 'inline-block')
    } 

  });


});
