$(function() {

	$('body').on('click', '.a2-listpage-content .article', function() {


		$('.a2-listPage').addClass('close');

		$('.a2-contentPage').addClass('open');

		// コンテンツページに取得した情報を埋め込み
		var title = $(this).attr('data-title');
		var image = $(this).attr('data-image');

		$('.a2-contentPage .title').text(title);
		$('.a2-contentPage .image').css({'background-image':'url(' + image + ')', 'background-repeat':'no-repeat', 'background-position':'center center','background-size':'cover'});

	});

	$('body').on('click', '.content-header', function() {
		$('.a2-listPage').removeClass('close');
		$('.a2-contentPage').removeClass('open');
		$('.text-content').scrollTop(0);
	});
	$('body').hammer().on('swiperight', '.a2-contentPage', function() {
		$('.a2-listPage').removeClass('close');
		$('.a2-contentPage').removeClass('open');
		$('.text-content').scrollTop(0);
	});
});

// テキスト解説部分
$(function() {
    prettyPrint();
　   $('body').on('click', '.a2-texts .tab', function() {

        var type = $(this).attr('data-src');

        if(type == 'left') {
            $('.a2-texts .content .a').removeClass('disnon');
            $('.a2-texts .content .b').addClass('disnon');

        } else if (type == 'right') {
            $('.a2-texts .content .b').removeClass('disnon');
            $('.a2-texts .content .a').addClass('disnon');

        }
        $('.a2-texts .tab').removeClass('selected');
        $(this).addClass('selected');
    });

　   $('body').on('click', '.a2-texts .types_tab', function() {

        var type = $(this).attr('data-src');

        if(type == 'html') {
            $('.a2-texts .code').addClass('disnon');
            $('.a2-texts .code.html').removeClass('disnon');

        } else if (type == 'css') {
            $('.a2-texts .code').addClass('disnon');
            $('.a2-texts .code.css').removeClass('disnon');

        } else if(type == 'js') {
            $('.a2-texts .code').addClass('disnon');
            $('.a2-texts .code.js').removeClass('disnon');
        }
        $('.a2-texts .types_tab').removeClass('selected');
        $(this).addClass('selected');
    });

});