$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    });
    $("#dropdown").mouseenter(function(){
        $("#list").show();
    });
    $("#dropdown").mouseleave(function(){
        $("#list").hide();
    });
    $("#out").mouseenter(function(){
        $("#out").css("color", "#3FB8BF");
    });
    $("#out").mouseleave(function(){
        $("#out").css("color", "black");
    });
    $("#staff").mouseenter(function(){
        $("#staff").css("color", "#3FB8BF");
    });
    $("#staff").mouseleave(function(){
        $("#staff").css("color", "black");
    });
    $("#app").mouseenter(function(){
        $("#app").css("color", "#3FB8BF");
    });
    $("#app").mouseleave(function(){
        $("#app").css("color", "black");
    });
    $("#fb").click(function(){
        location.href="https://www.facebook.com/essensolutions";
    });
    $("#twitter").click(function(){
        location.href="https://www.twitter.com/essensolutions";
    });
    $("#ln").click(function(){
        location.href="https://www.linkedin.com/company/essen-solutions";
    });
});
