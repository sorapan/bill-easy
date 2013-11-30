(function($){

    var all_price_note=0 , vat_price_note=0;

    $(document).ready(function(){
        CheckRadioButton();
        $(document).on("keyup", " #unit, #ppu",function(event){
            //$(" .1[id^='price'] ").css("background-color","yellow"); //Test Key Up

            Price_Calculate();
            All_Price_Calculate();
            VAT_Calculate();
            Last_Price_Calculate();
        });

        $(document).on("keyup", " #price",function(event){
            All_Price_Calculate();
            VAT_Calculate();
            Last_Price_Calculate();
        });

        // Auto Calculate When There Row Was Removed;
        $(document).on('click',' #DelRowButton' ,function(){
            Price_Calculate();
            All_Price_Calculate();
            VAT_Calculate();
            Last_Price_Calculate();
        });
    });


    function Price_Calculate(){
        $(" #unit").each(function(n){

            if($.isNumeric($("."+n+"[id^='unit']").val()) || $.isNumeric($("."+n+"[id^='ppu']").val()) ){

                var unit_val = parseFloat($("."+n+"[id^='unit']").val());
                var ppu_val = parseFloat($("."+n+"[id^='ppu']").val());
                var answer = unit_val * ppu_val ;

                if($.isNumeric(answer)) $("."+n+"[id^='price']").val(answer);
                else $("."+n+"[id^='price']").val("");

            }


        });
    }

    function All_Price_Calculate(){
        var all_price = 0;

        $(' #price').each(function(n){

            if( $.isNumeric($(this).val()) ){
                all_price = parseFloat(all_price);
                all_price += parseFloat($(this).val());
                $(' #all_price').val(all_price);
                all_price_note = parseFloat(all_price);
            }else{
                $(' #all_price').val("");
            }
        });
    }

    function VAT_Calculate(){
        var vat = 0 ;

        if($.isNumeric(all_price_note)){
            vat = all_price_note*(7/100);
            vat = parseFloat(vat);
            vat = vat.toFixed(2);
            $(' #vat_price').val(vat);
            vat_price_note = parseFloat(vat);

        }
        if($(' #all_price').val() === ""){
            $(' #vat_price').val("");
        }
    }

    function Last_Price_Calculate(){
        var last_price = 0;
        if($.isNumeric(all_price_note) || $.isNumeric(vat_price_note)){
            last_price = parseFloat(all_price_note) + parseFloat(vat_price_note);
            last_price = parseFloat(last_price);
            last_price = last_price.toFixed(2);
            $(" #last_price").val(last_price);
        }
        if($(' #vat_price').val() === ""){
            $(" #last_price").val("");
        }
    }

    function CheckRadioButton(){

        $("  input[type='radio'] ").change(function(){

            if($("  input[type='radio']:eq(0) ").is(" :checked")){

                $(" #result").html("vat1");

            }else if($("  input[type='radio']:eq(1) ").is(" :checked")){

                $(" #result").html("vat2");

            }

        });

    }

})(jQuery);



