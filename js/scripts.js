$(document).ready(function() {
    // Comment for Week4 Exercise by more jquery exercise
    $("#mycarousel").carousel({
        interval: 2000
    });
    // $("#carousel-pause").click(function() {
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function() {
    //     $("#mycarousel").carousel('cycle');
    // });

    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        } else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    //Assignment 4

    //Reserve Table
    $("#reserveTableButton").click(function() {
        $('#reserveTable').modal('toggle');
    });

    //Login Modal
    $("#loginButton").click(function() {
        $('#loginModal').modal('toggle');
    });

});