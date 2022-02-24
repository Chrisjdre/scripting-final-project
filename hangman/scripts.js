// const lines = document.querySelectorAll("line");
// lines.forEach(function(line) {
//     line.style.stroke = "red";
// });

// const head = document.querySelector("circle");
// head.style.stroke = "blue";

// const man = document.querySelectorAll(".figure-part");

// man.forEach(function(part){
//     part.style.stroke = "yellow"
// });

// const popup = document.getElementById("popup-container");
// popup.style.display = "flex";
const correctLetters = [];
const wrongLetters = [];

const wrongLettersEl = document.getElementById('wrong-letters-container');
const wordEl = document.getElementById('word-container');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const playAgainBtn = document.getElementById('play-button');
const figure_parts = document.querySelectorAll(".figure-part");
const letter_already_entered = document.getElementById("letter-already-entered");
let gamePlaying = true;

playAgainBtn.addEventListener('click', function(){
    gamePlaying = true;
    correctLetters.splice(0);
    wrongLetters.splice(0);
    updateWrongLetters();
    getRandomWord();
    displayword();
    popup.style.display = "none";
});

function updateWrongLetters() {
    let result = wrongLetters.length > 0 ? '<p>Wrong</p>' : '';
    for(const letter of wrongLetters){
        result += "<span>" + letter + "</span>, ";
    }
    result = result.replaceAll("</span><span>", "</span>, <span>");
    wrongLettersEl.innerHTML = result;
    figure_parts.forEach(function(part, index){
        if(index < wrongLetters.length) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }

    });
    if (wrongLetters.length === figure_parts.length) {
        const finalMessage = document.getElementById('final-message');
        finalMessage.innerHTML = 'Unfortunately,<br>you lost. 😞';
        const popup = document.getElementById('popup-container');
        popup.style.display = 'flex';
        gamePlaying = false;
    }
}

function showNotification(letter){
    letter_already_entered.textContent = letter;
    notification.classList.add("show");
    setTimeout(function(){
        notification.classList.remove("show");
    }, 4000);
}

window.addEventListener("keydown", function(event){
    if(gamePlaying) {

    
    const keyPress = event.key;
    if(keyPress.match(/^[a-z]/g)) {
        if(selectedWord.includes(keyPress)){
            if(!correctLetters.includes(keyPress)){
                correctLetters.push(keyPress);
                displayword();
            }else{
                showNotification(keyPress);
            }
        }else {//pressed incorrect letter
            if(!wrongLetters.includes(keyPress)){
                wrongLetters.push(keyPress);
                updateWrongLetters();
            }else{
                showNotification(keyPress);
            }
        }
        
    }
}
});


let selectedWord;
function getRandomWord(){
    const words = ["Butterfly", "Car", "Steak", "Bubblegum", "Napkin", "Pancakes", "eggs","turkey","barbell","squat", "protein"];
    const rand = Math.floor(Math.random() * words.length)
    selectedWord = words[rand].toLowerCase();
    return selectedWord;
}

function displayword(){
    const letters = selectedWord.split('');
    let result = '';
    for(const letter of letters){
        result += '<span class="letter">';
        result += correctLetters.includes(letter) ? letter : '';
        result += '</span>';
    }
    wordEl.innerHTML=result;

    const innerLetters = wordEl.innerText.replace(/\n/g, '');;
    console.log(innerLetters);
    if (innerLetters === selectedWord) {
        gamePlaying = false;
        const finalMessage = document.getElementById('final-message');
        finalMessage.innerHTML = 'Congratulations!<br>You won! 😃';
        const popup = document.getElementById('popup-container');
        popup.style.display = 'flex';
    }
    
    
}

getRandomWord();
displayword();
