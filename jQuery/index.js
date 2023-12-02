console.log("run");

$(document).ready(function(){
    console.log("--------run jQuery--------");
})

$("#nameHide").click(function(){
    $(".name").hide();
})

$("#nameShow").click(function(){
    $(".name").show();
})