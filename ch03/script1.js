var startBtn = document.getElementById('start');
var goBtn = document.getElementById('go');
const result = document.getElementById('result');

startBtn.addEventListener('click', function() {
    var numbers = "";
        var sum = 0;
        var iter = 0;
        while(iter >= 0){
            var numbers = prompt("Give number, enter Q to quit");
            if('Q' === numbers || 'q' === numbers){
                break;
            }
            if(isNaN(numbers)){
                console.log("please enter a number");
            }else{
                var num = parseInt(numbers);
                sum = sum + num;
                iter++;
            }
        }
        var average = sum/iter;
        console.log("Sum " + sum);
        console.log("Count " + iter);
        console.log("average " + average);
    
});


goBtn.addEventListener('click', function() {
    console.log("hello");
    var max = prompt("Give number");
    var min = prompt("Give me a smaller number");
    if (min > max){
        var temp = max;
        max = min;
        min = temp;
    }
    console.log(max);
    console.log(min);
    result.innerHTML = "Max: " + max + "<br> Min: " + min;
    do{
        var betweenNumber = prompt("Give me a number in between those to numbers");
    }while(betweenNumber > max || betweenNumber < min);
    console.log(betweenNumber);
    result.innerHTML = "Max: " + max + "<br> Min: " + min + "<br> numberBetween: " + betweenNumber;
});