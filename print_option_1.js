$(function() {

    document.getElementById("last_number").disabled = true;
    document.getElementById("last_alphabet").disabled = true;

//    $(document).on("click"," #btg"

    $(document).on("click"," #btg",function(){

        var new_height = ($(' #bottom_box ').height() == 90) ? $(" #btg").height() : 90;
        var new_width = ($(' #bottom_box ').width() == $(window).width()) ? 250 : $(window).width();

        $(" #bottom_box").animate({
            height : new_height,
            width : new_width
        });

    });



    ///////////////////////////////////////////PRIVATE///////////////////////////////////////////




});
