$(function(){
    $(".buttons i:first").click(() => {
        $(".buttons i:first").addClass("active");
        $(".buttons i:last").removeClass("active");
        $(".products li").removeClass("horizontal");
        $(".products li").addClass("vertical");
    });

    $(".buttons i:last").click(() => {
        $(".buttons i:first").removeClass("active");
        $(".buttons i:last").addClass("active");
        $(".products li").removeClass("vertical");
        $(".products li").addClass("horizontal");
    });

});