$(document).ready(function () {
    // On scrolling navigation then change the color
    $(window).scroll(() => {
        if ($(window).scrollTop() >= 200) {
            $(".navbar").css("background-color", "#F1F3FF");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
    $('a[href^="#"]').on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top - 100,
                },
                800,
                function () {
                    window.location.hash = hash - 100;
                }
            );
        }
    });
    $("#carouselExampleControls").carousel({
        interval: 10000,
    });
    $(".carousel .carousel-item").each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(":first-child").clone().appendTo($(this));
        } else {
            $(this)
                .siblings(":first")
                .children(":first-child")
                .clone()
                .appendTo($(this));
        }
    });
});