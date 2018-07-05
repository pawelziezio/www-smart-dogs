/**
 * Created by jtuscher on 02.12.16.
 */
$(document).on('scroll resize', function () {
    var scrollFromTop = $(document).scrollTop();
    var additionalOffset = 240; //makes the animation start before the whole section becomes visible
    var distanceFromTopTeam = $('#three').offset().top - additionalOffset; //defines the animation start moment

    if (
      scrollFromTop >= distanceFromTopTeam &&
      !$('#three').hasClass('i-ve-been-there')
    ) {
      $('#three').addClass('i-ve-been-there');
      $('.front').addClass('flip-front-scroll');
      $('.front').addClass('transition-scroll');
      $('.back').addClass('flip-back-scroll');
      $('.back').addClass('transition-scroll');
      setTimeout(function () {
      $('.front').removeClass('transition-scroll');
      $('.back').removeClass('transition-scroll');
      }, 2000);
    }

  }
);

