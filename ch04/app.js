// $(document).ready(function(){
//     console.log("Hello from jQuery");
// });

// $(function(){
//     console.log($("#demo-container").text());
//     console.log($(".demo-box").text());
//     $('.demo-box').html("THIS IS NEW TEXT")

//     $("#copyright-date").text(new Date().getFullYear());

//     $("demo-box").click(function(){
//         $(".demo-box").css("color", "red");
//     });
// });

$(function(){
    $("ul").on("click", "li", function() {
        $(this).css({
            "color" : "red",
            "font-weight" : "bold",
            "text-decoration" : "line-through"
        });
    });
    
});




$(document).ready(function(){
    $("div span").css("background-color", "blue");
  });