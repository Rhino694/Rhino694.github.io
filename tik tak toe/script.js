$(document).ready(function () {
    $('.overlay').hide()
    $('#start').click(function (e) {
        e.preventDefault();
        $(this).hide();
        firstSecond();
        $('.block').mouseover(function () {
            $(this).css('background', '#ececec')
        })
        $('.block').mouseout(function () {
            $(this).css('background', 'lightgrey')
        })
    })

    function firstSecond() {
        var text = $('h1').attr('player');
        if (text == 'first') {
            firstPl();
        }
        if (text == 'second') {
            secondPl()
        }
    }

    function firstPl() {
        $('h1').slideDown().html('First Player')
        setTimeout(function () {
            if ($('.block').attr('size') != 'empty') {
                $('.overlay').fadeIn();
                $('.winner').html('Draw')
            }
        }, 300)
        $('.block').click(function () {
            if ($(this).attr('size') == 'empty' && $('h1').attr('player') == 'first') {
                $(this).html('&times;');
                $(this).attr('size', 'full').addClass('first').removeClass('block').attr('position', 'true');
                $('h1').attr('player', 'second');
                firstSecond();
            }
            if ($('#0').hasClass('first') && $('#1').hasClass('first') && $('#2').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#0').hasClass('first') && $('#4').hasClass('first') && $('#8').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#2').hasClass('first') && $('#4').hasClass('first') && $('#6').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#0').hasClass('first') && $('#3').hasClass('first') && $('#6').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#8').hasClass('first') && $('#7').hasClass('first') && $('#6').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#2').hasClass('first') && $('#5').hasClass('first') && $('#8').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#1').hasClass('first') && $('#4').hasClass('first') && $('#7').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
            if ($('#3').hasClass('first') && $('#4').hasClass('first') && $('#5').hasClass('first')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'First Player');
                }, 200)
            }
        })
    }

    function secondPl() {
        $('h1').html('Second Player').slideDown();
        setTimeout(function () {
            if ($('.block').attr('size') != 'empty') {
                $('.overlay').fadeIn();
                $('.winner').html('Draw')
            }
        }, 300)
        $('.block').click(function () {
            if ($(this).attr('size') == 'empty' && $('h1').attr('player') == 'second') {
                $(this).html('&#9900;');
                $(this).attr('size', 'full').removeClass('block').addClass('second').attr('position', 'true');
                $('h1').attr('player', 'first');
                firstSecond();
            }
            if ($('#0').hasClass('second') && $('#1').hasClass('second') && $('#2').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');
                }, 200)
            }
            if ($('#0').hasClass('second') && $('#4').hasClass('second') && $('#8').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#2').hasClass('second') && $('#4').hasClass('second') && $('#6').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#0').hasClass('second') && $('#3').hasClass('second') && $('#6').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#8').hasClass('second') && $('#7').hasClass('second') && $('#6').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#2').hasClass('second') && $('#5').hasClass('second') && $('#8').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#1').hasClass('second') && $('#4').hasClass('second') && $('#7').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
            if ($('#3').hasClass('second') && $('#4').hasClass('second') && $('#5').hasClass('second')) {
                setTimeout(function () {
                    $('.overlay').fadeIn()
                    $('.winner').html('Winner:' + 'Second Player');

                }, 200)
            }
        })
    }

});