

$(document).ready(function(){


/*--- Album Players ---*/

  $('#play1').click(function(){
      $('#player1').fadeIn(500);
      $('#close1').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#close1').click(function(){
      $('#player1').css('display', 'none');
      $('#play1').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#play2').click(function(){
      $('#player2').fadeIn(500);
      $('#close2').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#close2').click(function(){
      $('#player2').css('display', 'none');
      $('#play2').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#play3').click(function(){
      $('#player3').fadeIn(500);
      $('#close3').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#close3').click(function(){
      $('#player3').css('display', 'none');
      $('#play3').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#play4').click(function(){
      $('#player4').fadeIn(500);
      $('#close4').fadeIn(500);
      $(this).css('display', 'none');
  });

  $('#close4').click(function(){
      $('#player4').css('display', 'none');
      $('#play4').fadeIn(500);
      $(this).css('display', 'none');
  });



/* ------ Youtube PLAYER ----- */

$("img.youtube").YouTubePopup({ idAttribute: 'wA3t6V79mzY' });



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
