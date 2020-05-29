$(function () {
    $('p#greeting')
        .text('Hello')
        .html('Hello <i>Kuzma</i>')
        .css('color', 'orange');

    $('p#greeting').click(function () {
        alert($(this).text());
    });

    // $('p').hover(function () {
    //     console.log('Test hover');
    // });

    $('p').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'initial');
        }
    );

    $('#btn-bold').click(function() {
        $('p').addClass('bold-and-bigger');
    });

    $('#btn-unbold').click(function() {
        $('p').removeClass('bold-and-bigger');
    });

    $('#btn-index').click(function() {
        $('p').each(function(index) {
            $(this).prepend(index + ') ');
        });

        $(this).prop('disabled', true);
    });

    $('#btn-show').click(function () {
        $('img#dog').toggle();

        if ($(this).text() == 'Show') {
            $(this).text('Hide');
        } else {
            $(this).text('Show');
        };
    });

    $('#btn-bigger').click(function () {
        $('img#dog').animate(
            { height: '+=50px' },
            1000
        );
    })

    $('#btn-smaller').click(function () {
        $('img#dog').animate(
            { height: '-=50px' },
            1000
        );
    })

    // to illustrate the concept of callbacks
    $('#btn-fade').click(function () {
        $('img#dog').fadeTo(3000, 0.5, function () { 
            alert('Done fading...'); 
        });
    });

    // example without callback. It doesn't work the same
    // $('#btn-fade').click(function () {
    //     $('img#dog').fadeOut(3000, 0.5); 
    //     alert('Done fading...'); 
    // });


})

