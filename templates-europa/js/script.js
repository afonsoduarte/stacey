var k_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    k_index = 0;

$(document).keydown(function(event) {

  // LEFT
  if (event.which == 37) {
    c.activeArticle.trigger('previousSlide');
    event.preventDefault();
  }
  // DOWN
  else if (event.which == 40){
    c.goToNextArticle();
    event.preventDefault();
  }
  // TOP
  else if (event.which == 38){
    c.goToPreviousArticle();
    event.preventDefault();
  }
  // RIGHT
  else if (event.which == 39){
    c.activeArticle.trigger('nextSlide');
    event.preventDefault();
  }

  // i
  else if (event.which == 73){
    c.activeArticle.toggleClass('description-active');
  }
  // ESC
  else if (event.which == 27){
    c.activeArticle.removeClass('description-active');
  }

  if(event.keyCode === k_keys[k_index++]){
      if(k_index === k_keys.length){
          $.getScript('http://www.cornify.com/js/cornify.js',function(){
                cornify_add();
                $(document).keydown(cornify_add);
            });
      }
  }else{
      k_index = 0;
  }

});

$(function() {

//$closeButton = $('<a role="button"/>').addClass('close-btn').on('click', toggleDescription);

$('.showcase')
  .find('article')
  .each(function(){
    $(this).gallery();
  })
  .waypoint(function(e) {
    c.updateURL(e.target.id);
    e.stopPropagation();
  }, {
    onlyOnScroll: true,
    continuous: false
  })
  .find('.description')
    .css('margin-bottom', function(){
      return - $(this).height()/2;
    })
    .append('<a role="button" class="close-btn">✕</a>')
      .find('.close-btn')
      .click(function() {
        $(this).parents('article').toggleClass('description-active');
      })
      .end()
      // .on('toggleDescription', function() {
      //   $(this).parents('article').toggleClass('description-active');
      // })
    .end()
  // DESCRIPTION TOGGLE
  .find('.read-more')
    .click(function(e){
      $(this)
        .parents('article')
          .toggleClass('description-active');
      e.preventDefault();
    });

var geo = getQueryString()["geo"];

if( geo === 'au') {
  $('body').addClass('au');
}

});

var c = new Controller();
