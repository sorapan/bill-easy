(function($){

   $.TrueStatus = function(message){

        $(' #status_1').html(message);
        $(' #status_box').css({
            "color":"darkgreen",
            "background-color":"transparent"
        });

   };

   $.FalseStatus = function(message){

        $(' #status_1').html(message);
        $(' #status_box').css({
            "color":"white",
            "background-color":"darkred"
        });


   };

   $.GetLastNumber = function(location,data,kind){

       $.ajax({
           url : "LastNumberActivity.php",
           type : "POST",
           scriptCharset: 'UTF-8',
           data : {
               data:data,
               method: "1",
               kind:kind
           },
           success : function(dt){
               if( location !== ""){

                    $(location).val(dt);

               }

           }
       });

   };

   $.EditLastNumber = function(data){

       var first_time = true;

       $(" #edit_last_number ").click(function(){

           if(first_time === true){

               $.rb_ip_custom_pop({
                   div : "edit_box",
                   input : "edit_input",
                   button : "edit_finish_button",
                   title : "แก้ไขเลขหน้า",
                   alphabet_input: "edit_alphabet"
               });

               first_time = false;

           }else{

               $(" .edit_box").show();

           }

           $(" input.edit_input").val( $(" #last_number").val() );
           $(" input.edit_alphabet").val( $(" #last_alphabet").val() );

           $(" .edit_finish_button").click(function(){

               var edit_input = $(' input.edit_input');
               var edit_alphabet = $(" input.edit_alphabet");

               if($.isNumeric( edit_input.val() ) && !$.isNumeric( edit_alphabet.val() )){

                   $.ajax({
                       url : "LastNumberActivity.php",
                       type : "POST",
                       scriptCharset: 'UTF-8',
                       dataType : 'JSON',
                       data : {
                           data:data,
                           newvalue_num : edit_input.val(),
                           newvalue_apb : edit_alphabet.val(),
                           method: "2"
                       },
                       success : function(dat){

                           $(" #last_number").val(dat.last_number);
                           $(" #last_alphabet").val(dat.last_alphabet);

                       }

                   });

                   $(" .edit_box").hide();
                   return true;

               }else{

                   alert("ข้อมูลผิดพลาด");
                   return false;

               }

           });

       });

   };



})(jQuery);