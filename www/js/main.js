$(function() {

	// 各インターフェイスHTMLファイルを読み込む
	$('#iphone-area .content1').load('apps/app1.html');

	$('#iphone-area .content2').load('apps/app2.html');

   $('#iphone-area .content3').load('apps/app3.html');


	$('#col-left .content1').load('texts/app1_text.html', null, function() {
		$.getScript("js/apps/app1.js");
	});
   $('#col-left .content2').load('texts/app2_text.html', null, function() {
   });
   $('#col-left .content3').load('texts/app3_text.html', null, function() {
   });

	// メニューの開閉
   function openMenu() {
         $('.app').addClass('out');
         $('#main_menu').addClass('show');
   }

   function closeMenu() {
      $('.app').removeClass('out');
      $('#main_menu').removeClass('show');

      // 開閉の際に、menuのtransitiond-delayを抑止する
      $('.menu').addClass('stop_delay');
      setTimeout(function() {
         $('.menu').removeClass('stop_delay');
      }, 600);
   }

   $('body').on('click', '.menu_button',function(e) {
      openMenu();
   });

   // スワイプで開くようにする
   $('body').hammer().on('swiperight', '#col-left', function() {
      openMenu();
   });

   $('body').on('click', '.app.out', function() {
      closeMenu();
   });

   // メニュー選択
   $('body').on('click', '#main_menu .menu', function() {

   		var type = $(this).attr('data-type');
   		if(type ==1) {
   			$('#col-left > .content').addClass('disnon');
   			$('#col-left > .content1').removeClass('disnon');
   			$('#col-right .content').addClass('disnon');
   			$('#col-right .content1').removeClass('disnon');
            $('.menu_button').css({'background':'#F39C12','border-bottom':'3px solid #D35400'});

   		} else if(type == 2) {
   			$('#col-left > .content').addClass('disnon');
   			$('#col-left > .content2').removeClass('disnon');
   			$('#col-right .content').addClass('disnon');
   			$('#col-right .content2').removeClass('disnon');
            $('.menu_button').css({'background':'#1E8BC3','border-bottom':'3px solid #1F3A93'});

   		} else if(type == 3) {
   			$('#col-left > .content').addClass('disnon');
   			$('#col-left > .content3').removeClass('disnon');
   			$('#col-right .content').addClass('disnon');
   			$('#col-right .content3').removeClass('disnon');
            $('.menu_button').css({'background':'#DB0A5B','border-bottom':'3px solid #96281B'});

   		}
		$('.app').removeClass('out');
      closeMenu();
   });
});