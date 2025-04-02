$(document).ready(function(){
    $('li:nth-of-type(1) img').click(function(){
        $("img[alt='milk1']").show();
        $("img[alt='milk2']").hide();
        $("img[alt='milk3']").hide();
    });
    $("li:nth-of-type(2) img").click(function(){
        $("img[alt='milk1']").hide();
        $("img[alt='milk2']").show();
        $("img[alt='milk3']").hide();
    });
    $("li:nth-of-type(3) img").click(function(){
        $("img[alt='milk1']").hide();
        $("img[alt='milk2']").hide();
        $("img[alt='milk3']").show();
    });
});

$(document).ready(function(){
    $("#detail2").hide();
    $("#review").hide();
    $("#inquiry").hide();
    $("#shipping").hide();


    $(".sub_nav li:first-of-type").click(function(){
        $("#detail").show();
        $("#detail2").hide();
        $("#review").hide();
        $("#inquiry").hide();
        $("#shipping").hide();
    });
    $(".sub_nav li:nth-of-type(2)").click(function(){
        $("#detail").hide();
        $("#detail2").show();
        $("#review").hide();
        $("#inquiry").hide();
        $("#shipping").hide();
    });
    $(".sub_nav li:nth-of-type(3)").click(function(){
        $("#detail").hide();
        $("#detail2").hide();
        $("#review").show();
        $("#inquiry").hide();
        $("#shipping").hide();
    });
    $(".sub_nav li:nth-of-type(4)").click(function(){
        $("#detail").hide();
        $("#detail2").hide();
        $("#review").hide();
        $("#inquiry").show();
        $("#shipping").hide();
    });
    $(".sub_nav li:last-of-type").click(function(){
        $("#detail").hide();
        $("#detail2").hide();
        $("#review").hide();
        $("#inquiry").hide();
        $("#shipping").show();
    });
});