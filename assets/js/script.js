$(document).ready(function() {

$("#navlogobox").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#one").offset().top + offset
    }, 1000);
});

$("#contactbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#six").offset().top + offset
    }, 1000);
});

$("#aboutbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#three").offset().top + offset
    }, 1000);
});

$("#earlyaccessbutton").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#seven").offset().top + offset
    }, 1000);
});

});