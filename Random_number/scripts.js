var randomNumber = Math.floor(Math.random() * 100 + 1);
const numbers = document.getElementById('numbers');
const playAgainBtn = document.getElementById('play-button');
const continueBtn = document.getElementById('continue');
const popup = document.getElementById('popup-container');
const popupwrong = document.getElementById('popup-container2');
const notification = document.getElementById('notification-container');
const titlerange = document.getElementById('notification-container');
const continueMessage = document.getElementById('wrong-message');
const continuebutton = document.getElementById('continue');

let gamePlaying = true;
var changeNumber = 100;



 


// play again button
 playAgainBtn.addEventListener('click', function(){
    gamePlaying = true;
    popup.style.display = "none";
    getRandomNumber(changeNumber);
});

// continue button
continueBtn.addEventListener('click', function(){
    popupwrong.style.display = "none";
});

// get the random number method
function getRandomNumber(changeNumber){
    randomNumber = Math.floor(Math.random() * changeNumber + 1);
    return randomNumber;
    
}
// checking to see if the number guessed is right
var guess = 1;
document.getElementById("guess").onclick = function(){
    var userGuess = document.getElementById("guessField").value;
    if(userGuess > changeNumber || userGuess < 0){
        guess++;
        const continueMessage = document.getElementById('wrong-message');
        continueMessage.innerHTML = 'Sorry <br>That guess it out of the current play range';
        popupwrong.style.display = 'flex';
        document.getElementById("guessField").value = "";
        
    }
    if(userGuess == randomNumber)
    {    
        const finalMessage = document.getElementById('final-message');
        const button = document.getElementById('play-button');
        finalMessage.innerHTML = 'You Guessed it right!<br>Click play to play again <br>' +
        "it took " + guess + " guesses";
        button.innerHTML = 'play again';
        popup.style.display = 'flex';
        gamePlaying = false;
        document.getElementById("guessField").value = "";
    }else if(userGuess > randomNumber && userGuess <= changeNumber) 
    {    
        guess++;
        const continueMessage = document.getElementById('wrong-message');
        continueMessage.innerHTML = 'Sorry <br>That guess was to high';
        popupwrong.style.display = 'flex';
        
    }else if (userGuess < randomNumber)
    {
        guess++;
        const continueMessage = document.getElementById('wrong-message');
        continueMessage.innerHTML = 'Sorry <br>That guess was to low!!!';
        popupwrong.style.display = 'flex';
    }


}
// code to make enter key work

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var userGuess = document.getElementById("guessField").value;
        if(userGuess > changeNumber || userGuess < 0){
            guess++;
            const continueMessage = document.getElementById('wrong-message');
            continueMessage.innerHTML = 'Sorry <br>That guess it out of the current play range';
            popupwrong.style.display = 'flex';
            document.getElementById("guessField").value = "";
            
        }
        if(userGuess == randomNumber)
        {    
            const finalMessage = document.getElementById('final-message');
            const button = document.getElementById('play-button');
            finalMessage.innerHTML = 'You Guessed it right!<br>Click play to play again <br>' +
            "it took " + guess + " guesses";
            button.innerHTML = 'play again';
            popup.style.display = 'flex';
            gamePlaying = false;
            document.getElementById("guessField").value = "";
        }else if(userGuess > randomNumber && userGuess <= changeNumber) 
        {    
            guess++;
            const continueMessage = document.getElementById('wrong-message');
            continueMessage.innerHTML = 'Sorry <br>That guess was to high';
            popupwrong.style.display = 'flex';
            
        }else if(userGuess < randomNumber)
        {
            guess++;
            const continueMessage = document.getElementById('wrong-message');
            continueMessage.innerHTML = 'Sorry <br>That guess was to low';
            popupwrong.style.display = 'flex';
        }
    }
});
// help button code 

document.getElementById("help").onclick = function(){
    if(guess > 0 && guess <=5){
        if(randomNumber%2 == 0){
            // alert("the number is divisibe by 2");
            continueMessage.innerHTML = 'the number is divisibe by 2';
            popupwrong.style.display = 'flex';
            continueBtn.innerHTML = "Continue";
        }else{
            continueMessage.innerHTML = 'the number is not divisibe by 2';
            popupwrong.style.display = 'flex';
            continueBtn.innerHTML = "Continue";
            // alert("the number is not divisibe by 2");
        }
    }
    if(guess > 5 && guess <= 10){
        if(randomNumber % 2 == 0){
            // alert("the number is divisibe by 2");
            if(randomNumber % 10 == 0){
                continueMessage.innerHTML = 'the number is divisibe by 2 <br>the number is divisble by 10';
                popupwrong.style.display = 'flex';
                continueBtn.innerHTML = "Continue";
            }else{
                continueMessage.innerHTML = 'the number is divisibe by 2 <br>the number is not divisble by 10';
                popupwrong.style.display = 'flex';
                continueBtn.innerHTML = "Continue";
            }
        }else{
            if(randomNumber % 10 == 0){
                continueMessage.innerHTML = 'the number is not divisibe by 2 <br>the number is divisble by 10';
                popupwrong.style.display = 'flex';
                continueBtn.innerHTML = "Continue";
            }else{
                continueMessage.innerHTML = 'the number is not divisibe by 2 <br>the number is not divisble by 10';
                popupwrong.style.display = 'flex';
                continueBtn.innerHTML = "Continue";
            }
            // alert("the number is not divisibe by 2");
        }
    }
}

document.getElementById("10").onclick = function(){
    changeNumber = 10;
    getRandomNumber(changeNumber);
    // alert("new game");
    document.getElementById('rangetitle').innerHTML = "Guess a number from 0 to 10";
    continueMessage.innerHTML = 'Game is now 0 to 10';
    popupwrong.style.display = 'flex';
    continueBtn.innerHTML = "Play";
}
document.getElementById("100").onclick = function(){
    getRandomNumber(changeNumber);
    changeNumber = 100;
    // alert("new game");
    document.getElementById('rangetitle').innerHTML = "Guess a number from 0 to 100";
    continueMessage.innerHTML = 'Game is now 0 to 100';
    popupwrong.style.display = 'flex';
    continueBtn.innerHTML = "Play";
}
document.getElementById("1000").onclick = function(){
    getRandomNumber(changeNumber);
    changeNumber = 1000;
    // alert("new game");
    document.getElementById('rangetitle').innerHTML = "Guess a number from 0 to 1000";
    continueMessage.innerHTML = 'Game is now 0 to 1000';
    popupwrong.style.display = 'flex';
    continueBtn.innerHTML = "Play";
}