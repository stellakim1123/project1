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