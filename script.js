function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};



$(window).scroll(function () {
    $('.timeline li').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('in-view');
        }
        else {
            $(this).removeClass('in-view');
        }
    });

    
    if ($(this).scrollTop() > 250) {
        $("#logo-name").removeClass("d-none");
        $("#menu").addClass("solid");
    } else {
        $("#logo-name").addClass("d-none");
    };
    

});

$(document).ready(function() {
    $('#menuBar a').on('click', function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 150
        }, 1000);
    })
});

