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


// to-do list js ---------------------------------------------------------------------

// $(document).ready(function(){
//     $("div span").css("background-color", "blue");
//   });

// $(function(){
//     var to_do_list;
//     if(localStorage.getItem("to_do_list") === null) {
//         to_do_list = [];
//     } else {
//         to_do_list = localStorage.getItem("to_do_list").split(",");
//         to_do_list.forEach(function(item) {
//             $("#to-do-list").append("<li>" + item + "</li>");
//         });
//     }
    
//     $("#addItem").click(function() {
//         var yourText = $("#yourText").val();
//         $("#to-do-list").append("<li>" + yourText + "</li>");
//         $("#yourText").val("");
//         to_do_list.push(yourText);
//         localStorage.setItem("to_do_list", to_do_list);
//     });
//     $("#to-do-list").on("click", "li", function() {
//         $(this).fadeOut(500);
//         to_do_list.splice(to_do_list.indexOf($(this).text()), 1);
//         localStorage.setItem("to_do_list", to_do_list);
//         console.log("List length " + to_do_list.length);
//         if(to_do_list.length === 0) {
//             localStorage.removeItem("to_do_list");
//         }
        
//     });
// ;});

// form submit js --------------------------------------------------------------------------

$(function(){

    function isEmail(str) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(str);
    }

    function isValidPassword(str) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(str);
    }


    $("#state").click(function() {
        $("#state option").first().attr("disabled", true);
    });

    $("#register").submit((event) => {
        event.preventDefault();
        $(".error").remove();
        var numErrors = 0;
        if($("#firstName").val() === "") {
            $("#firstName").after('<div class="error">First name is required</div>');
            numErrors++;
        }

        if($("#lastName").val() === "") {
            $("#lastName").after('<div class="error">Last name is required</div>');
            numErrors++;
        }

        if($("#email").val() === "") {
            $("#email").after('<div class="error">Email address is required</div>');
            numErrors++;
        } else {
            if(!isEmail($("#email").val())) {
                $("#email").after('<div class="error">Invalid email address</div>');
            numErrors++;
            }
        }

        if(!isValidPassword($("#password").val())) {
            $("#password").after('<div class="error">Minimum 8 characters, 1 letter and 1 number</div>');
            numErrors++;
        }

        if($("#state").val() === "") {
            $("#state").after('<div class="error">Please select your state</div>');
            numErrors++;
        }

        if(!$("#terms").is(":checked")) {
            $("#terms ~ label").after('<div class="error">Please agree to our terms</div>');
            numErrors++;
        }

        if(!$('input[name="gender"]').is(":checked")) {
            $('.boxes.radio').after('<div class="error">Please select a gender</div>');
            numErrors++;
        }

        if(numErrors > 0) {
            $('input[type="submit"]').after('<div class="error">You have ' + numErrors + ((numErrors === 1) ? " error" : " errors") + '</div>');
        } else {
            // Submit form to the server
        }
    });
});