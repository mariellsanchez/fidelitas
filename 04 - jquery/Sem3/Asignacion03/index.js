var percentage = 30;

$("#acordeon").accordion();

$("#calendar").datepicker();

$("#slider").slider();

$("#progressbar").progressbar({value: percentage});

$("#progressbar").tooltip();

$("#autocomplete").autocomplete({
    source: ["reggae", 
    "reggaeton", 
    "jazz", 
    "r&b", 
    "soul", 
    "pop", 
    "funk",
    "disco", 
    "house",
    "techno",
    "rap",
    "k-pop"]
})