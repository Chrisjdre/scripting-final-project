var input = parseInt(prompt("Give number"));

function sumAllNumbers(input){
    var total = 0;
    for(var i = 0;i <= input;i++){
        total += i;
    }
console.log(total)
}
sumAllNumbers(input);