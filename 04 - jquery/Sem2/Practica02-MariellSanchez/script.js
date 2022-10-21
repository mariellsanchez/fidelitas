$("#container--one").mousemove(function(){
    Swal.fire('Esta es el área de recreación')
})

$("#container--two").mousemove(function(){
    $(".alert").html('<div class="alert alert-warning" role="alert"> Esta es la sala de reuniones </div>');
});

$("#container--two").mouseleave(function(){
    $(".alert").html('');
});

$("#container--three").mouseenter(function(){
    $("#container--three").hide('slow');
});

$("#container--three").mouseleave(function(){
    $("#container--three").show('fast'); 
});

$("#container--four").mousemove(function(){
    $(this).css("background-color","black");
    $(this).css("border-radius","0px");
});

$("#container--four").mouseleave(function(){
    $(this).css("background-color","rgb(146, 127, 255)");
    $(this).css("border-radius","10px");
});