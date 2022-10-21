$("#email").blur( function(){
    if (!$(this).val()){
        $(this).addClass("error-email");
    } else{
        $(this).addClass("succes");
        
    }
});

$("input").blur( function(){
    if (!$(this).val()){
        $(this).addClass("error");
    } else{
        $(this).addClass("succes");
        
    }
});

$("button").click( function(){
    if (!$("input").val()){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Aun no se completan todos los campos!',
          })
    } else{
        Swal.fire(
            'Listo!',
            'Has enviado el formulario',
            'success'
        );      
    }
});

