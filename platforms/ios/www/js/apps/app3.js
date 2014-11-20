$(function() {
    $('body').hammer().on('hold', '.a3-photo',function(e) {

            //ホールド位置の座標を取得
            var y = e.gesture.center.pageY;
            var x = e.gesture.center.pageX;
            y = y-170;
            x = x-620;

            //中央の座標を計算
            var center_y = y-105;
            var center_x = x-105;

            //メニューを表示
            $('#a3-holdstamp').css({'top':center_y,'left':center_x}).show();

            //メニューのフォーカス範囲を計算
            //Menu1(上部分)
            var one_left = x-25;
            var one_right = x+25;
            var one_top = y-100;
            var one_bottom = y-40;
            //Menu2(右部分)
            var two_left = x+40;
            var two_right = x+100;
            var two_top = y-25;
            var two_bottom = y+25;
            //Menu3(下部分)
            var three_left = x-25;　
            var three_right = x+25;
            var three_top = y+40;
            var three_bottom = y+100;
            //Menu4(左部分)
            var four_left = x-100;
            var four_right = x-40;
            var four_top = y-25;
            var four_bottom = y+25;


            //フォーカス範囲に指が動いたら、スタイルを適用
            $(this).on('touchmove', function(e) {
                e.preventDefault();
                //座標を取得
                var movingX = event.changedTouches[0].pageX;
                var movingY = event.changedTouches[0].pageY;
                movingX = movingX-620;
                movingY = movingY-170;


                $('#a3-holdstamp > div').removeClass('hover');
                //フォーカス判定
                if((one_left < movingX) && (movingX < one_right) && (one_top < movingY) && (movingY < one_bottom)) {
                    $('#a3-holdstamp > .menu1').addClass('hover');
                    $('#a3-holdstamp').attr('data-id', 1);

                } else if((two_left < movingX) && (movingX < two_right) && (two_top < movingY) && (movingY < two_bottom)) {
                    $('#a3-holdstamp > .menu2').addClass('hover');
                    $('#a3-holdstamp').attr('data-id', 2);

                } else if((three_left < movingX) && (movingX < three_right) && (three_top < movingY) && (movingY < three_bottom)) {
                    $('#a3-holdstamp > .menu3').addClass('hover');
                    $('#a3-holdstamp').attr('data-id', 3);

                } else if((four_left < movingX) && (movingX < four_right) && (four_top < movingY) && (movingY < four_bottom)) {
                    $('#a3-holdstamp > .menu4').addClass('hover');
                    $('#a3-holdstamp').attr('data-id', 4);

                } else {
                    $('#a3-holdstamp > div').removeClass('hover');
                    $('#a3-holdstamp').attr('data-id', 0);
                }

            });


            $(this).bind('touchend', function() {
                $(this).off('touchmove touchend');
                var data_num = $('#a3-holdstamp').attr('data-id');
                if(data_num == 1) {
                    // stamp1
                    var point_X = x -20;
                    var point_Y = y -20;
                    var stamp1_html = '<div class="stamp stamp1 magictime puffIn" style="left:'+point_X+'px;top:'+point_Y+'px;"><i class="icon icon-heart"></i></div>';
                    $('.a3-photo').append(stamp1_html);

                } else if(data_num == 2) {
                    var point_X = x -20;
                    var point_Y = y -20;
                    var stamp2_html = '<div class="stamp stamp2 magictime puffIn" style="left:'+point_X+'px;top:'+point_Y+'px;"><i class="icon icon-star3"></i></div>';
                    $('.a3-photo').append(stamp2_html);

                } else if(data_num == 3) {
                    var point_X = x -20;
                    var point_Y = y -20;
                    var stamp3_html = '<div class="stamp stamp3 magictime puffIn" style="left:'+point_X+'px;top:'+point_Y+'px;"><i class="icon icon-thumbs-up"></i></div>';
                    $('.a3-photo').append(stamp3_html);

                } else if(data_num == 4) {
                    var point_X = x -20;
                    var point_Y = y -20;
                    var stamp4_html = '<div class="stamp stamp4 magictime puffIn" style="left:'+point_X+'px;top:'+point_Y+'px;"><i class="icon icon-happy2"></i></div>';
                    $('.a3-photo').append(stamp4_html);
                }
               $('#a3-holdstamp').hide();
               $('#a3-holdstamp > div').removeClass('hover');
            });
    });
    // スタンプの移動
    $('body').on('touchstart', '.stamp', function() {

        var x = event.changedTouches[0].pageX;
        var y = event.changedTouches[0].pageY;
        x = x-620;
        y = y-170;

        $(this).on('touchmove', function(e) {
            e.preventDefault();
            var movingX = event.changedTouches[0].pageX;
            var movingY = event.changedTouches[0].pageY;
            movingX = movingX-620;
            movingY = movingY-170;
            $(this).css({'left':movingX-20+'px', 'top':movingY-20+'px'});
        });

        $(this).bind('touchend', function() {
            $(this).off('touchmove touchend');
        });

    });
    // スタンプのリセット
    $('body').on('click', '.a3-header .reset_button', function() {
        $('.stamp').remove();
    });

    // カメラの起動
    $('body').on('click', '.a3-header .take_camera', function() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var src = "data:image/jpeg;base64," + imageData;
            $('.a3-photo').css({'background-image':'url(' + src + ')', 'background-repeat':'no-repeat', 'background-position':'center center','background-size':'cover'});
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    });
});
// テキスト解説部分
$(function() {
    prettyPrint();
　   $('body').on('click', '.a3-texts .tab', function() {

        var type = $(this).attr('data-src');

        if(type == 'left') {
            $('.a3-texts .content .a').removeClass('disnon');
            $('.a3-texts .content .b').addClass('disnon');

        } else if (type == 'right') {
            $('.a3-texts .content .b').removeClass('disnon');
            $('.a3-texts .content .a').addClass('disnon');

        }
        $('.a3-texts .tab').removeClass('selected');
        $(this).addClass('selected');
    });

　   $('body').on('click', '.a3-texts .types_tab', function() {

        var type = $(this).attr('data-src');

        if(type == 'html') {
            $('.a3-texts .code').addClass('disnon');
            $('.a3-texts .code.html').removeClass('disnon');

        } else if (type == 'css') {
            $('.a3-texts .code').addClass('disnon');
            $('.a3-texts .code.css').removeClass('disnon');

        } else if(type == 'js') {
            $('.a3-texts .code').addClass('disnon');
            $('.a3-texts .code.js').removeClass('disnon');
        }
        $('.a3-texts .types_tab').removeClass('selected');
        $(this).addClass('selected');
    });

});