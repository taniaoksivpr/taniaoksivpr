$(document).ready(function() {
  $('.carousel').carousel({interval: 3000});
  $('#carousel-example-generic').on('slid.bs.carousel', function () {
    if ($('div.active').hasClass('bedroom')) {
      $('.main-action__text-room, .main-desc__name').text('Для спальни')
      $('.main-desc__price-num').text('50')
    }
    if($('div.active').hasClass('kitchen')){
      $('.main-action__text-room, .main-desc__name').text('Для кухни')
      $('.main-desc__price-num').text('60')
    } 
    if($('div.active').hasClass('livingroom')){
      $('.main-action__text-room').text('Для гостинной')
      $('.main-desc__name').text('Для зала')
      $('.main-desc__price-num').text('70')
    }
  })
})