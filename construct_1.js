$(function() {

    CreateRow();
    DeleteRow();

    var i= 1,ii=1,unit,price,name,ppu;

    ///////////////////////////////////////////PRIVATE///////////////////////////////////////////

    function CreateRow(){

        $(' #CreateRowButton ').click(function(){

             unit = "unit" + i;
             name =  "name" + i ;
             ppu =  "ppu" + i ;
             price = "price"+ i ;

                $(' #table1 #data_body ').append(' <tr>' +
                    '<td><input type="text"  class="'+ i +'" id="unit" ></td>' +
                    '<td><input type="text"  class="'+ i +'"  id="name" style="width:400px"></td>' +
                    '<td><input type="text"  class="'+ i +'" id="ppu"></td>' +
                    '<td><input type="text"  class="'+ i +'" id="price"></td>' +
                    '</tr> ');

                i++;
                ii = i;

                //console.log(unit); //check variable in console log
                //console.log("ii ="+ii); //check ii
        });
    }

    function DeleteRow(){

        $(document).on('click',' #DelRowButton' ,function(){

            if(ii > 1){
                $(" ."+ii+"").remove();
                $(" #data_body tr:last-child").remove();
                i = i-1;
                ii = i ;
                //console.log("ii ="+ii); //check ii
            }

        });


            // *** #DeleteRow relate about "calculate_1.js"
    }

});




