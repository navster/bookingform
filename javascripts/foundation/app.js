;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $('input, textarea').placeholder();
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

  //var d = $('#estnumbers').val();
  //if (d < 40) {

  //}
  $('#estnumbers').change(function() {
    var d = $(this).val();
    if (isNumber(d)){
      if(d >= 100 && d <= 188){
        //$('#radio1').attr('disabled','disabled');
        //$('#radio2').prop('disabled',true);
        $('#radio1').parent().show();
        $('#radio2').parent().show();
        $('#radio3').parent().show();
        $('#radio1').parent().hide();
        $('#radio2').parent().hide();
        console.log('change now');
      }
      else if(d > 188 && d <= 374){
        $('#radio1').parent().show();
        $('#radio2').parent().show();
        $('#radio3').parent().show();
      }
      else if(d > 374){
        alert('The maximum occupancy is 374')
        $('#radio1').parent().hide();
        $('#radio2').parent().hide();
        $('#radio3').parent().hide();
      }
      else if(d > 40 && d <= 90){
        $('#radio1').parent().show();
        $('#radio2').parent().show();
        $('#radio3').parent().show();
        $('#radio3').parent().hide();
      }
      else if(d > 90 && d <= 96){
        $('#radio1').parent().show();
        $('#radio2').parent().show();
        $('#radio3').parent().show();
        $('#radio1').parent().hide();
        $('#radio3').parent().hide();
      }
      else if(d < 40){
        alert('The minimum occupancy is 40')
        $('#radio1').parent().hide();
        $('#radio2').parent().hide();
        $('#radio3').parent().hide();
      }
    } else {
      alert('This is not a number');
      $('#radio1').parent().show();
      $('#radio2').parent().show();
      $('#radio3').parent().show();
    }
  });

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  //$('#dp1').datepicker()
  $( "#datepicker" ).datepicker();

  $('#calendar').fullCalendar({
    events: [
        {
            title  : 'Unavailable',
            start  : '2012-11-16'
        },
        {
            title  : 'Unavailable',
            start  : '2012-11-05',
            end    : '2012-11-07'
        },
        {
            title  : 'seminar',
            start  : '2012-11-15 12:30:00',
            allDay : false // will make the time show
        }
    ]
});

})(jQuery, this);
