// Navigation
$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top -50 // negative offset fix
    }, 500, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});

// Home button
$("a.navbar-brand[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top -50 // negative offset fix
    }, 500, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});

// Back to top button
$("#back-to-top a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top -50 // negative offset fix
    }, 500, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});
