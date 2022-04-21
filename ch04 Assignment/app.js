$(function(){
var numpeople = 0;
var totalage = 0;
var avgage = 0;
    function isEmail(str) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(str);
    }

    function isValidPassword(str) {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(str);
    }

   
// filters 

    $("#male-filter").click(function() {
        
        if(!$("#male-filter").is(":checked")){
            $( ".male" ).parent().hide();

        }
        if($("#male-filter").is(":checked")){
            $( ".male" ).parent().show();
        }
    });
    $("#female-filter").click(function() {
        if(!$("#female-filter").is(":checked")){
            $( ".female" ).parent().hide();

        }
        if($("#female-filter").is(":checked")){
            $( ".female" ).parent().show();
        }
    });
    $("#Non-binary-filter").click(function() {
        if(!$("#Non-binary-filter").is(":checked")){
            $( ".nonbinary" ).parent().hide();

        }
        if($("#Non-binary-filter").is(":checked")){
            $( ".nonbinary" ).parent().show();
        }
    });
    $("#newsletter-filter").click(function() {
        if(!$("#newsletter-filter").is(":checked")){
            $( ".true" ).parent().hide();

        }
        if($("#newsletter-filter").is(":checked")){
            $( ".true" ).parent().show();
        }
    });
// end of filters


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
        }else{
            var firstName = $("#firstName").val();
        }

        if($("#lastName").val() === "") {
            $("#lastName").after('<div class="error">Last name is required</div>');
            numErrors++;
        }else{
            var lastName = $("#lastName").val();
        }

        if($("#email").val() === "") {
            $("#email").after('<div class="error">Email address is required</div>');
            numErrors++;
        } else if(!isEmail($("#email").val())) {
            $("#email").after('<div class="error">Invalid email address</div>');
            numErrors++;
        }else{
            var email = $("#email").val();
        }

        if(!isValidPassword($("#password").val())) {
            $("#password").after('<div class="error">Minimum 8 characters, 1 letter and 1 number</div>');
            numErrors++;
        }else{
            var password = $("#password").val();
        }

        if($("#Age").val() < 0) {
            $("#Age").after('<div class="error">Age cannot be negative</div>');
            numErrors++;
        }else if($("#Age").val() === "") {
            $("#Age").after('<div class="error">Please enter your age</div>');
            numErrors++;
        }else{
            var age = $("#Age").val();
        }

        if($("#state").val() === "") {
            $("#state").after('<div class="error">Please select your state</div>');
            numErrors++;
        }else{
            var state = $("#state").val();
        }

        if(!$("#terms").is(":checked")) {
            $("#terms ~ label").after('<div class="error">Please agree to our terms</div>');
            numErrors++;
        }else{
            if($("#terms").is(":checked")){
               var terms = true;
            }
        }
        var newsletter;
        if(!$("#newsletter").is(":checked")) {
            newsletter = false;
        }else if($("#terms").is(":checked")){
            newsletter = true;
        }

        if(!$('input[name="gender"]').is(":checked")) {
            $('.box.radio:last').after('<div class="error">Please select a gender</div>');
            numErrors++;
        }else{
            var gender = $("input[name='gender']:checked").val();
        }
        var className = firstName + lastName;
        if(numErrors > 0) {
            $('input[type="submit"]').after('<div class="error">You have ' + numErrors + ((numErrors === 1) ? " error" : " errors") + '</div>');
        } else {
            // Submit form to the server
            if(!$("tr").hasClass(className)){
                numpeople++;
                totalage = avgage + parseInt(age);
                avgage = totalage/numpeople;
                var person = [];
                person.push($("#firstName").val()); // 0
                person.push($("#lastName").val());
                person.push($("#email").val());
                person.push($("#password").val());
                person.push(age);
                person.push($("#state").val());
                person.push($("#terms").is(":checked"));
                person.push($("#newsletter").is(":checked"));
                person.push($("input[name='gender']:checked").val()); // 8
                person.push(totalage); // 9
                person.push(numpeople);
                allPeople.push(person);
                localStorage.setItem("allPeople", JSON.stringify(allPeople));


                $("#tbody").append('<tr class="' + firstName + lastName + '"></tr>');
                $("." + firstName + lastName).append("<td class = 'fname'>" + firstName + "</td>");
                $("." + firstName + lastName).append("<td class = 'lname'>" + lastName + "</td>");
                $("." + firstName + lastName).append("<td class = 'email'>" + email + "</td>");
                $("." + firstName + lastName).append("<td class = 'password'>" + password + "</td>");
                $("." + firstName + lastName).append("<td class = 'age'>" + age + "</td>");
                $("." + firstName + lastName).append("<td class = 'state'>" + state + "</td>");
                $("." + firstName + lastName).append("<td class = ' terms'>" + terms + "</td>");
                $("." + firstName + lastName).append("<td class = '" + newsletter + "'>" + newsletter + "</td>");
                $("." + firstName + lastName).append("<td class = '" + gender + "'>" + gender + "</td>" + "</tr>");
                $("#averageAge").html(avgage.toFixed(2));  
                // $('form').get(0).reset();
            }else{
                $('input[type="submit"]').after('<div class="error">Someone has that name already </div>');
            }
            
        }
        
        
    });
    var allPeople = [];
    var allPeopleFromStorage = JSON.parse(localStorage.getItem("allPeople"));
    allPeopleFromStorage.forEach((person) => {
        allPeople.push(person);
        $("#tbody").append('<tr class="' + person[0] + person[1] + '"></tr>');
        var personList = $("." + person[0] + person[1]);
        
        personList.append(`<td class = 'fname'> ${person[0]} </td>`);
        personList.append(`<td class = 'lname'> ${person[1]} </td>`);
        personList.append(`<td class = 'email'> ${person[2]} </td>`);
        personList.append(`<td class = 'password'> ${person[3]} </td>`);
        personList.append(`<td class = 'age'> ${person[4]} </td>`);
        personList.append(`<td class = 'state'> ${person[5]} </td>`);
        personList.append(`<td class = 'terms'> ${person[6]} </td>`);
        personList.append(`<td class = '${person[7]}'> ${person[7]} </td>`);
        personList.append(`<td class = '${person[8]}'>${person[8]} </td>`);
        totalage = person[9];
        numpeople = person[10];
        avgage = totalage/numpeople;
        $("#averageAge").html(avgage.toFixed(2));

        $("#tbody").append(personList);
    });

    $("#dark-mode-btn input").prop("checked", false);

    $("#dark-mode-btn").on("click", "input", function() {
        if($(this).prop("checked") == true) {
            //dark mode
            $("body").removeClass("light-mode");
            $("body").addClass("dark-mode");
        } else if($(this).prop("checked") == false) {
            // light mode
            $("body").removeClass("dark-mode");
            $("body").addClass("light-mode");
        }
    });

    
});