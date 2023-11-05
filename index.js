jQuery(document).ready(function($) {
  var slider = $('#slider'),
    items = slider.find('li'),
    count = items.length,
    time = 5000;
  slider.carousel({
    interval: time,
    pause: "false"
  });
  animate(0);
  slider.on('slide.bs.carousel', function(event) {
    var active = $(event.target).find('.carousel-inner > .active'),
      pos_prev = $(event.relatedTarget).index();
    animate(pos_prev);
  });
  items.find('.dots').click(function(event) {
    reset($(this).data('slide-to'), true);
  });

  function reset(index, goto = false) {
    items.find('.dots>span').css('opacity', 0);
    items.find('.line').stop().width(0);
    animate(index);
    if (goto == true) {
      items.eq(index).prevAll().find('.dots>span').css('opacity', 1);
      items.eq(index).prevAll().find('.line').width('100%');
    }
  }

  function animate(index) {
    if (index < count) {
      items.eq(index).find('.dots>span').css('opacity', 1);
      items.eq(index).find('.line').stop().animate({
        width: '100%',
      }, time, function() {
        if (index == count - 1) {
          reset(0);
        }
      });
    }

  }
});
