var startBtn = document.getElementById('start');

startBtn.addEventListener('click', function() {
    console.log("hello");
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