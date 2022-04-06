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

// $(function(){
//     $("ul").on("click", "li", function() {
//         $(this).css({
//             "color" : "red",
//             "font-weight" : "bold",
//             "text-decoration" : "line-through"
//         });
//     });
    
// });




// $(document).ready(function(){
//     $("div span").css("background-color", "blue");
//   });

$(function(){
    var to_do_list;
    if(localStorage.getItem("to_do_list") === null) {
        to_do_list = [];
    } else {
        to_do_list = localStorage.getItem("to_do_list").split(",");
        to_do_list.forEach(function(item) {
            $("#to-do-list").append("<li>" + item + "</li>");
        });
    }
    
    $("#addItem").click(function() {
        var yourText = $("#yourText").val();
        $("#to-do-list").append("<li>" + yourText + "</li>");
        $("#yourText").val("");
        to_do_list.push(yourText);
        localStorage.setItem("to_do_list", to_do_list);
    });
    $("#to-do-list").on("click", "li", function() {
        $(this).fadeOut(500);
        to_do_list.splice(to_do_list.indexOf($(this).text()), 1);
        localStorage.setItem("to_do_list", to_do_list);
        console.log("List length " + to_do_list.length);
        if(to_do_list.length === 0) {
            localStorage.removeItem("to_do_list");
        }
        
    });
;});