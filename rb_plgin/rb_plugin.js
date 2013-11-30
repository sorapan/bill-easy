(function($){

    $.ClassicAjax = function (a){

        var options = $.extend({

            url : "",
            type : "",
            async : true,
            data : "",
            success : function(data){}

        },a);

        function ReturnIt(){

            var xmlhttp;

            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari

                xmlhttp=new XMLHttpRequest();
            }

            else

            {// code for IE6, IE5

                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

            }


            xmlhttp.onreadystatechange = function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)

                {
                    options.success(xmlhttp.responseText);
                }
            };

            xmlhttp.open(options.type, options.url, options.async);
            xmlhttp.send(options.data);

        }


        return ReturnIt();
    };

})(jQuery);
