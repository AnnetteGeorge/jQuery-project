$("h1").addClass("big-title");
$("button").addClass("button-color");
$("a").attr("href","https://www.udemy.com");
$("h1").click(function(){
    $("h1").css("color","red");
});
$("button").click(function(){
    $("h1").css("color","yellow");
});
$("button").click(function(){
    $("h1").text("welcome");
});
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});