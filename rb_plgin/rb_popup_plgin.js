(function($){

    $.rb_load_pop = function(){

        $(" body ").append("<div id='popup_sty01'>PLEASE WAITING...<button>Okay</button></div>");

        $(" #popup_sty01").find(" button").click(function(){
            $(" #popup_sty01").hide();
        });

    };

    $.rb_ip_custom_pop = function(a){

        var options = $.extend({
            div : "", alphabet_input: "", input : "", button : "", title : ""
        },a);

        function ReturnIt(){

            $(" body ").append("<div id='popup_sty01'><div id='header'></div><input type='text' maxlength='1'><input type='text' maxlength='4'><button>Okay</button></div>");
            $(" div#popup_sty01").addClass(options.div);
            $(" div#popup_sty01 input:eq(0)").addClass(options.alphabet_input);
            $(" div#popup_sty01 input:eq(1)").addClass(options.input);
            $(" div#popup_sty01 button").addClass(options.button);
            $(" div#popup_sty01 #header").html(options.title);

        }

        return ReturnIt();
    };

    $.rb_pop_1 = function(msg){

        return msg;

    };

    $.pluginBar = function(a) {

        var settings = $.extend( {

            someEvent: function() {}

        }, a);

        return settings.someEvent();
    };

    $.aa = function(a){

       return $.each(function(){

       },a);
    }



})(jQuery);
