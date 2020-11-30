$(document).ready(function() {
  // мы забираем ссылку на видео из атрибутов кнопки и вставляем в атрибут src в тэге iframe
  var $videoSrc;
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);

  // если видео было открыто, запустить его
  $('#myModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
  })

  // если окно закрыто, остановить видео
  $('#myModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc);
  })
});
