$(function() {

    var unit_rray = {},name_rray = {},ppu_rray = {},price_rray = {};
    var checkempty = 0;
    var header_choi = 0;

        HeaderSelector();
        CheckReadButton();

    $.ajaxSetup({
        xhr: function() {
            //return new window.XMLHttpRequest();
            try{
                if(window.ActiveXObject)
                    return new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) { }

            return new window.XMLHttpRequest();
        }
    });

    ///////////////////////////////////////////PRIVATE///////////////////////////////////////////

    function CheckReadButton(){
        $(' #reading').click(function(e){

            e.preventDefault();
            var r_u_ok = confirm("Are you sure?");
            if(r_u_ok == true){

                //unit_rray = unit_aa.toArray();
                //alert(unit_rray[1].innerHTML);
                //I have tried to use "toArray" but it not work yet.

                //var emptyTextbox = $(' input:text').filter(function() { return $(this).val() == "";});
                initialize();



                EachAndToArray(' #unit',unit_rray);
                EachAndToArray(' #name',name_rray);
                EachAndToArray(' #ppu',ppu_rray);
                EachAndToArray(' #price',price_rray);

//                $(' input:text').each(function(){
//                    if(this.value == ""){
//
//                        //ShowInStatusBox(false, "Some text box is empty");
//                        $.FalseStatus("Some text box is empty");
//                        checkempty = 0;
//                        return false;
//
//                    }else{
//
//                        //ShowInStatusBox(true, "Data was successful");
//                        $.TrueStatus("Data was successful");
//                        checkempty = 1;
//                        return true;
//
//                    }
//                });

//                if(checkempty === 1){

                    TransferData();
//                }

                //TransferData();
                //window.location = "result.php";
            }

        });

    }

    function EachAndToArray(location, arrayname){
        $( location).each(function(number_each){
            arrayname[number_each] = $(this).val();
            //alert(arrayname); // Check data in array
            //$(' span').append(arrayname[number_each]); // Check data in array

        });
    }

    function TransferData(){

        if(header_choi != 0){


            $.ajax({
                url : 'bridge.php',
                type : 'POST',
                scriptCharset: 'UTF-8',
                async : false,
                data :  {
                        json_unit:JSON.stringify(unit_rray),
                        json_name:JSON.stringify(name_rray),
                        json_ppu:JSON.stringify(ppu_rray),
                        json_price:JSON.stringify(price_rray),
                        all_price:$(' #all_price').val(),
                        vat_price:$(' #vat_price').val(),
                        last_price:$(' #last_price').val(),
                        name_customer:$(' #name_customer').val(),
                        address_customer:$(' #address_customer').val(),
                        day:$(' .day').val(),
                        month:$(' .month').val(),
                        year:$(' .year').val(),
                        header_choi:header_choi
                    },
                success : function(data){
                    //$(' #result').html("<br><br>"+data);
                    if(data != ""){
                        $(' #result').html(data);

                        setTimeout(function(){
                           $(' #result').html("");
                        },2000);

                        window.open('result.php','Print Page','scrollbars=1,height=1100,width=900');

                    }
                }


            });

        }else{

           // ShowInStatusBox(false,"Please Select Header" );
            $.FalseStatus("Please Select Header");

        }

    }

    function HeaderSelector(){

        $(" #select_headername").change(function(){

            if($(" option:eq(0) ").is(" :selected")){
                //$(" #result").html("");
                $.TrueStatus("Please select Header");
                header_choi = 0;


            }else if($(" option:eq(1) ").is(" :selected")){
                //ShowInStatusBox(true,"Choose Header 1");
                $.TrueStatus("Choose Header 1");
                header_choi = 1;



            }else if($(" option:eq(2) ").is(" :selected")){
                //ShowInStatusBox(true,"Choose Header 2");
                $.TrueStatus("Choose Header 2");
                header_choi = 2;



            }else if($(" option:eq(3) ").is(" :selected")){
               // ShowInStatusBox(true,"Choose Header 3");
                $.TrueStatus("Choose Header 3");
                header_choi = 3;


            }
        });
    }

    function initialize(){
        $(' #result').html("");
        unit_rray = {};
        name_rray = {};
        ppu_rray = {};
        price_rray = {};
    }




});

