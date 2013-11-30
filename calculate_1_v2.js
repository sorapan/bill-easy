$(function() {

    var inverse = "1";


    $(' .vat_1').prop('checked', true);
    CheckRadioButton();

    $(document).on("change", " input[type='radio'] ",function(event){
        Price_Calculate(inverse);
    });

    $(document).on("keyup", " #unit, #ppu",function(event){
        //$(" .1[id^='price'] ").css("background-color","yellow"); //Test Key Up
        Price_Calculate(inverse);
        $.TrueStatus("Putting value");
    });

    $(document).on("keyup", " #price",function(event){
        Price_Calculate(inverse);
        // There no calculate function.
    });

    // Auto Calculate When There Row Was Removed;
    $(document).on('click',' #CreateRowButton,#DelRowButton' ,function(){
        Price_Calculate(inverse);
    });



    ///////////////////////////////////////////PRIVATE///////////////////////////////////////////

    function Price_Calculate(inverse){

        var price,vat;

        $(" #unit").each(function(n){

            if($.isNumeric($("."+n+"[id^='unit']").val()) || $.isNumeric($("."+n+"[id^='ppu']").val()) ){

                var unit_val = parseFloat($("."+n+"[id^='unit']").val());
                var ppu_val = parseFloat($("."+n+"[id^='ppu']").val());
                var answer = unit_val * ppu_val ;

                if($.isNumeric(answer)) $("."+n+"[id^='price']").val(answer);
                else $("."+n+"[id^='price']").val("");

            }

        });

        if(inverse == "1" || inverse == "3"){

            All_Price_Calculate(price,inverse);

        }else if(inverse == "2"){

            Last_Price_Calculate(price,vat,inverse);

        }


    }

    function All_Price_Calculate(price,inverse){

        if(inverse == "1"){

            var all_price = 0, all_price_note=0;

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

            VAT_Calculate(all_price_note, inverse);

        }else if(inverse == "2"){

            $(' #all_price').val(price);

            if($(' #last_price').val() === ""){
                $(' #all_price').val("");
            }

        }else if(inverse == "3"){

            var a_price = 0;

            $(' #price').each(function(n){
                if( $.isNumeric($(this).val()) ){

                        a_price = parseFloat(a_price);
                        a_price += parseFloat($(this).val());
                        $(' #all_price').val(a_price);
                        $(' #vat_price').val("-");
                        $(' #last_price').val(a_price);

                }else{
                    $(' #all_price').val("");
                }

                if($(' #all_price').val() === ""){
                    $(' #vat_price').val("");
                    $(' #last_price').val("");
                }

            });

        }

    }

    function VAT_Calculate(price, inverse){

        var vat_price_note = 0;

        if(inverse == "1"){

            var vat = 0 ;

            if($.isNumeric(price)){
                vat = price*(7/100);
                vat = parseFloat(vat);
                vat = vat.toFixed(2);
                $(' #vat_price').val(vat);
                vat_price_note = parseFloat(vat);

            }
            if($(' #all_price').val() === ""){
                $(' #vat_price').val("");
            }

            Last_Price_Calculate(price,vat_price_note,inverse);

        }else if(inverse == "2"){

            var vat_note = 0, vat_result=0;

            vat_note = parseFloat((price*100)/107);
            vat_result =  parseFloat( price - vat_note );
            vat_note = vat_note.toFixed(2);
            vat_result = vat_result.toFixed(2);
            $(' #vat_price').val(vat_result);
            All_Price_Calculate(vat_note, inverse);

            if($(' #last_price').val() === ""){
                $(' #vat_price').val("");
            }
        }


    }

    function Last_Price_Calculate(price,vat,inverse){

        if(inverse == "1"){

            var last_price = 0;
            if($.isNumeric(price) || $.isNumeric(vat)){
                last_price = parseFloat(price) + parseFloat(vat);
                last_price = parseFloat(last_price);
                last_price = last_price.toFixed(2);
                $(" #last_price").val(last_price);
            }
            if($(' #vat_price').val() === ""){
                $(" #last_price").val("");
            }

        }else if(inverse == "2"){

            var last_price = 0, last_price_note=0;

            $(' #price').each(function(n){

                if( $.isNumeric($(this).val()) ){
                    last_price = parseFloat(last_price);
                    last_price += parseFloat($(this).val());
                    $(' #last_price').val(last_price);
                    last_price_note = parseFloat(last_price);
                }else{
                    $(' #last_price').val("");
                }
            });

            VAT_Calculate(last_price_note, inverse);

        }

    }


    function CheckRadioButton(){

        $("  input[type='radio'] ").change(function(){

            if($("  input[type='radio']:eq(0) ").is(" :checked")){

                inverse = "1";
                $.TrueStatus("Normal Vat");

            }else if($("  input[type='radio']:eq(1) ").is(" :checked")){

                inverse = "2";
                $.TrueStatus("Reverse Vat");

            }else if($("  input[type='radio']:eq(2) ").is(" :checked")){

                inverse = "3";
                $.TrueStatus("Non Vat");

            }

        });

    }


});




