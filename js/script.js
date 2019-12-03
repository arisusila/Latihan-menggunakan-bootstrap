$(window).scroll(function () { //element window , pada saat di scroll
    var wScroll = $(this).scrollTop();


    // tampilkan  teknologi
    if (wScroll > $('.row-divider').offset().top - 200) {
        $('.row-divider .teknologi').each(function (i) {
            setTimeout(function () {
                $('.row-divider .teknologi').eq(i).addClass('muncul'); //eq adalah element yang keberapa
            }, 300 * (i + 1));

        })


    }

});