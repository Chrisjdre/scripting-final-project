var randomNumber = Math.floor(Math.random() * 100 + 1);
const numbers = document.getElementById('numbers');
const playAgainBtn = document.getElementById('play-button');
const continueBtn = document.getElementById('continue');
const popup = document.getElementById('popup-container');
const popupwrong = document.getElementById('popup-container2');
const notification = document.getElementById('notification-container');
let gamePlaying = true;

 


// play again button
 playAgainBtn.addEventListener('click', function(){
    gamePlaying = true;
    popup.style.display = "none";
    getRandomNumber();
});

// continue button
continueBtn.addEventListener('click', function(){
    popupwrong.style.display = "none";
});

// get the random number method
function getRandomNumber(){
    randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomNumber);
    return randomNumber;
    
}
// checking to see if the number guessed is right
var guess = 1;
document.getElementById("guess").onclick = function(){
    var userGuess = document.getElementById("guessField").value;
  
    if(userGuess == randomNumber)
    {    
        const finalMessage = document.getElementById('final-message');
        const button = document.getElementById('play-button');
        finalMessage.innerHTML = 'You Guessed it right!<br>Click play to play again';
        button.innerHTML = 'play again';
        popup.style.display = 'flex';
        gamePlaying = false;
    }else if(userGuess > randomNumber) 
    {    
        guess++;
        const continueMessage = document.getElementById('wrong-message');
        continueMessage.innerHTML = 'Sorry <br>That guess was to high';
        popupwrong.style.display = 'flex';
        
    }else
    {
        guess++;
        const continueMessage = document.getElementById('wrong-message');
        continueMessage.innerHTML = 'Sorry <br>That guess was to low';
        popupwrong.style.display = 'flex';
    }


}
