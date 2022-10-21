$("#acordeon").accordion();

$("#progressbar").progressbar();

$("#spinner").spinner({
    min:0,
    max:100,
});

$("#spinner").spinner({
    change: function( event, ui ) {
        $("#progressbar").progressbar("value",$( "#spinner" ).spinner().spinner( "value" ));
        $("#valor").html($( "#spinner" ).spinner().spinner( "value" ));
        if($( "#spinner" ).spinner().spinner( "value" )==100){
            Swal.fire(
                'Listo!',
                'Has llenado la barra',
                'success'
            );  
        }
    }
    
});

$( "#tabs" ).tabs();
