// JavaScript Document
var typed = new Typed('.element', {
strings: ["Web Designer.", "Code Developer.","Apps Designer.","film maker."],
typeSpeed:50,
backSpeed:50,
loop:true,
});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

/**********************Change color of center aligned animated content small Circle  "START"************************************/
$(document).ready(function(){
    $(" .debits").hover(function(){
        $(" .center-right").css("background-color", "#4997cd");
        }, function(){
        $(" .center-right").css("background-color", "#fff");
    }); 
});
$(document).ready(function(){
    $(".credits").hover(function(){
        $(".center-left").css("background-color", "#4997cd");
        }, function(){
        $(".center-left").css("background-color", "#fff");
    }); 
});
$('.counter').countUp();
