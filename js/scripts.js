(function($) {
  $(function() {
    $('nav ul li > a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
  });
})(jQuery);

// Toggle the .active span.

$('#nav-toggle').on('click', function() {
  this.classList.toggle('active');
});

// Toggle the nav ul on click.

$('#nav-toggle').click(function() {
  $('nav ul').toggle();
});