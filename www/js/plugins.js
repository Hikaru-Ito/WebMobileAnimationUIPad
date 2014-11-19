// プラグインを読込むのに使用

//
// Tap Effect
//
(function() {
  var init = function() {
    $('body').on('touchstart touchend', '.tap', touchEventHandler);
  };

  var touchEventHandler = function(e) {
    if (e.type === 'touchstart') {
      $(this).addClass('tapStyle');
      //media1.play();
    } else {
      $(this).removeClass('tapStyle');
    }
  };

  $(init); // onload
})();


//
// Fast Click
//
$(function() {
    FastClick.attach(document.body);
});


//
// Cordovaの読み込み終了関数
//
document.addEventListener('deviceready', function() {
    // navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    //     destinationType: Camera.DestinationType.DATA_URL
    // });
});

