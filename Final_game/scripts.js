var play = 0    ;
var player1score = 0;
var player2score = 0;
var randomNumber = 0;
var random1;
var random2;
var highscore = 0;
$(function(){
    function getRandomNumber(changeNumber) {
        randomNumber = Math.floor(Math.random() * changeNumber + 1);
        return randomNumber;
    }
    function getQuestion(changeNumber2) {
        random1 = getRandomNumber(changeNumber2);
        random2 = getRandomNumber(changeNumber2);
       
        $("#Question").html("What is: " + random1 + " X " + random2 );
    }


    $("#play-button").click(function() {
        $("#popup-container").css({
            "display": "none"
            
        });
        getQuestion(10);
        $("#Player").html("Player 1s turn");
        play = 0;
        player1score = 0;
        player2score = 0;
        highscore = localStorage.getItem("highscore");
        $("#highscore").html(highscore);
    });

    $("#Answer").click((event) => {
        event.preventDefault();
        var answer = $("#answerField").val();
        $("#answerField").val("");
        if(isNaN(answer)){
            $("#popup-container2").css({
                "display": "flex"
                
            });
            $("#continue").click(function() {
                $("#popup-container2").css({
                    "display": "none"
                });

            });

        }else if(answer == random1 * random2 && play % 2 == 0){
            play++;
            player1score++;
            if(player1score > highscore){
                highscore = player1score;
                $("#highscore").html(highscore);
                localStorage.setItem("highscore",highscore);
            }
            $("#Player").html("Player 2s turn");
            if(play > 5){
                getQuestion(100);
            }else{
                getQuestion(10);
            }
        }else if(answer == random1 * random2 && play % 2 != 0){
            play++;
            player2score++;
            if(player2score > highscore){
                highscore = player2score;
                $("#highscore").html(highscore);
                localStorage.setItem("highscore",highscore);
            }
            $("#Player").html("Player 1s turn");
            if(play > 5){
                getQuestion(100);
            }else{
                getQuestion(10);
            }
        }else{
            $("#popup-container").css({
                "display": "flex"
                
            });
            if(play % 2 == 0){
                $("#final-message").html("Player 2 wins! <br> There was a total of " + play + " plays <br> player 1 got " + player1score + " right <br> Player 2 got " + player2score + " right");
            }else{
                $("#final-message").html("Player 1 wins! <br> There was a total of " + play + " plays <br> player 1 got " + player1score + " right <br> Player 2 got " + player2score + " right");
            }
        }
    });
   



});
