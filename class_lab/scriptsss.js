// var input = parseInt(prompt("Give number"));

// function sumAllNumbers(input){
//     var total = 0;
//     for(var i = 0;i <= input;i++){
//         total += i;
//     }
// console.log(total)
// }
// sumAllNumbers(input);

$(function(){
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
      
    function calc_total() {
        var total = 0;
        $('.cost:visible').each(function() {
            total += parseFloat($(this).text());
        });
        $('#totalAmount').text(formatter.format(total));
    }

    $("#food-filter").change(function() {
        var choice = $(this).val();
        $("#food-receipt tbody tr").hide();
        switch(choice) {
            case 'food':
                $(".food").show();
                break;
            case 'beverage':
                $(".beverage").show();
                break;
            case 'breakfast':
                $(".breakfast").show();
                break;
            case 'hot':
                $(".hot").show();
                break;
            case 'cold':
                $(".cold").show();
                break;
            case 'all':
            default:
                $("#food-receipt tbody tr").show();
                break;
        }
        calc_total();
    });

    calc_total();
});