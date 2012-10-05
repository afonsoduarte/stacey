/* script */

$(function() {

  //Init Gallery
  if($('.project .media').length > 0) $('.project .media').gallery();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomImage() {
    return images[ getRandomInt(0, images.length - 1) ];
  }

  if($('.random-image').length > 0) $('.random-image').append('<img src="'+ getRandomImage() +'" />');

});