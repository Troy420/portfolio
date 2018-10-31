
//-----------------------------------TYPE 3
$(function(){
  $(".mobile-nav-toggle").click(function(){
    $(".mobile-nav").slideToggle();

    var status = $(".mobile-nav-toggle").hasClass('is-open');
    if(status){
        $(".mobile-nav-toggle").removeClass('is-open');
    }else{
      $(".mobile-nav-toggle").addClass('is-open');
    }
  })
})


//------------------------------------TYPE 1

// $(function(){
//   mobileNav();
// });

// function mobileNav(){
//   $('.mobile-nav-toggle').on('click', function(){
//     var status = $(this).hasClass('is-open');
//     if(status){
//       $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
//     }else{
//       $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
//     }
//   });
// }


//---------------------------------TYPE 2
// (function ($) {
//   "use strict"

  // var $mobileNavToggleBtn,
      // $blankATags = $('a[href^="#"]'),
      // $body = $('html, body'),
      // settings = {
      //   duration : 1000
      // };

  // function onBtnClick (e){
  //   var $this = $(this),
  //       $selectors = $('.mobile-nav');
  //
  //   $this.toggleClass('is-open');
  //   $selectors.toggleClass('is-open');
  // }

  // function onBlankAClick (event){
  //   var $this = $(this),
  //       href = $this.attr('href'),
  //       $target = $(href);
  //
  //   if($target.length > 0){
  //     event.preventDefault();
  //     $body.animate({
  //       scrollTop: $target.offset().top
  //     }, settings.duration);
  //   }
  // }

//   $(document).ready(function(){
//     var $mobileNavToggleBtn = $('.mobile-nav-toggle');
//     $mobileNavToggleBtn.on('click', onBtnClick);
//     $blankATags.on('click', onBlankAClick);
//   });
// })(jQuery);
