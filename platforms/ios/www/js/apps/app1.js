$(function() {
   $('body').hammer().on('hold', '.a1-item',function(e) {
        e.gesture.stopDetect();
        var y = e.gesture.center.pageY;
        var x = e.gesture.center.pageX;

        // 埋め込みViewのため、画面の差分を計算する
        y = y-136; // 46+10+80
        x = x-630; // 520+60+50
        //console.log(x);
        //console.log(y);

        var centerY = y-50;
        var centerX = x-50;

        $('.a1-header').addClass('a1-blur');
        $('.a1-content').addClass('a1-blur');

        var image = $(this).attr('data-image');
        $('#a1-modalbg').attr('data-after',0);
        $('#a1-pointball').css({'background-image':'url(' + image + ')', 'background-repeat':'no-repeat', 'background-position':'center center'}).css({'left':centerX, 'top':centerY}).show();

        $('#a1-modalbg').show();

        $(this).on('touchmove', function(e) {
            e.preventDefault();
            var position_ab_X = event.changedTouches[0].pageX;
            var position_ab_Y = event.changedTouches[0].pageY;
            position_ab_X = position_ab_X-630;
            position_ab_Y = position_ab_Y-136;

            positionX = position_ab_X - centerX;
            positionY = position_ab_Y - centerY;
            $('#a1-pointball').css({'left':centerX + positionX - 50, 'top':centerY + positionY - 50});

            if((position_ab_Y+50 > 240) && (position_ab_Y-50 < 290) && (position_ab_X-50 < 60)) { // 左 : x座標が６０未満、y座標が240から２９０まで
                $('.a1-zone.left').addClass('selected');
                $('.a1-message.drop').addClass('disnon');
                $('.a1-message.share').removeClass('disnon');
                $('#a1-modalbg').attr('data-after',1);

            } else if((position_ab_Y+50 > 240) && (position_ab_Y-50 < 290) && (position_ab_X+50 > 240)) { // Right : x ->
                $('.a1-zone.right').addClass('selected');
                $('.a1-message.drop').addClass('disnon');
                $('.a1-message.wish').removeClass('disnon');
                $('#a1-modalbg').attr('data-after',2);

            } else if((position_ab_Y+50 > 453) && (position_ab_X+50 > 125) && (position_ab_X-50 < 175)) {
                $('.a1-zone.bottom').addClass('selected');
                $('.a1-message.drop').addClass('disnon');
                $('.a1-message.cart').removeClass('disnon');
                $('#a1-modalbg').attr('data-after',3);

            } else {
                $('.a1-zone').removeClass('selected');
                $('.a1-message').addClass('disnon');
                $('.a1-message.drop').removeClass('disnon');
                $('#a1-modalbg').attr('data-after',0);
            }

        });


        $(this).bind('touchend touchcancel', function() {
            $(this).off('touchmove touchend');

            $('.a1-zone').removeClass('selected');

            $('#a1-modalbg').hide();
            $('#a1-pointball').hide();

            $('.a1-message').addClass('disnon');
            $('.a1-message.drop').removeClass('disnon');

            $('.a1-header').removeClass('a1-blur');
            $('.a1-content').removeClass('a1-blur');


            var data_after = $('#a1-modalbg').attr('data-after');

            if(data_after == 1) {
                $('.a1-statusbar').removeClass('disnon');
                $('.a1-statusbar').css('background','#22A7F0');
                setTimeout(function() {
                    $('.a1-statusbar').addClass('disnon');
                    $('.a1-notification.share').removeClass('disnon');
                }, 2200);
                setTimeout(function() {
                    $('.a1-notification').addClass('disnon');
                }, 4000);

            } else if(data_after == 2) {
                $('.a1-statusbar').removeClass('disnon');
                $('.a1-statusbar').css('background','#DB0A5B');
                setTimeout(function() {
                    $('.a1-statusbar').addClass('disnon');
                    $('.a1-notification.wish').removeClass('disnon');
                }, 2200);
                setTimeout(function() {
                    $('.a1-notification').addClass('disnon');
                }, 4000);


            } else if(data_after == 3) {
                $('.a1-statusbar').removeClass('disnon');
                $('.a1-statusbar').css('background','#F22613');
                setTimeout(function() {
                    $('.a1-statusbar').addClass('disnon');
                    $('.a1-notification.cart').removeClass('disnon');
                }, 2200);
                setTimeout(function() {
                    $('.a1-notification').addClass('disnon');
                }, 4000);
            }

        });


    });
});