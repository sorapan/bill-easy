$(function() {

    document.getElementById("last_number").disabled = true;
    document.getElementById("last_alphabet").disabled = true;

    $(" #btg").click(function(){

        var new_height = ($(' #bottom_box ').height() == 90) ? $(" #btg").height() : 90;

        $(" #bottom_box").animate({
           height : new_height
        });

    });



    ///////////////////////////////////////////PRIVATE///////////////////////////////////////////




});
