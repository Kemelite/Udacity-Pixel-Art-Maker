// Select color input
let  color;

// Select size input
let height, width;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function makeGrid(event){
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
    $("table tr").remove();


    let r =0;
    while(r <height){
        $("table").append("<tr></tr>");
        for(let j=0; j< width; j++){
            $("tr:last").append("<td></td>");
        }
    r = r+1;   
    }
    
});
$(document).on("click","tr td", function() {
        color = $("#colorPicker").val();
        $(this).css("background-color", color);
});
