/**
 * Created by khetmanska on 30.11.16.
 */
$(document).on('scroll resize', function () {
    var scrollFromTop = $(document).scrollTop();

    var distanceFromTopFunction = $('#two').offset().top-80;
    var distanceFromTopTeam = $('#three').offset().top-40;
    var distanceFromTopContact = $('#four').offset().top-180;

    if (scrollFromTop >= distanceFromTopFunction
      && scrollFromTop < distanceFromTopTeam) {
      $('#navbar-function').addClass('menu-highlight');
    }
    else {
      $('#navbar-function').removeClass('menu-highlight');
    }

    if (
      scrollFromTop >= distanceFromTopTeam &&
      scrollFromTop < distanceFromTopContact
    ) {
      $('#navbar-team').addClass('menu-highlight');
    }
    else {
      $('#navbar-team').removeClass('menu-highlight');

    }
    if (scrollFromTop >= distanceFromTopContact) {
      $('#navbar-contact').addClass('menu-highlight');
    }
    else {
      $('#navbar-contact').removeClass('menu-highlight');

    }
  }
);
//insert last modification date in footer:
var msg = '<p><span>Aktualizowano: <span/><br>' + document.lastModified.split(' ')[0] + '</p>';
var el = document.getElementById('dateActualization');
el.innerHTML = msg;
