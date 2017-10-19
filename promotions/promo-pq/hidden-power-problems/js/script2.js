// JavaScript Document

$(document).ready(function() {



   


	
$("#question2-1, #question2-2, #question2-3, #question2-4, #question3").hide();

    $("#q1-1").on("click", function() {
        $("#question2-4").show();
        $("#question1").hide();
    });

    $("#q1-2").on("click", function() {
        $("#question2-1").show();
        $("#question1").hide();
    });

    $("#q1-3").on("click", function() {
        $("#question2-3").show();
        $("#question1").hide();
    });
	
	$("#q3-1").on("click", function() {
        $("#question2-4").show();
        $("#question2-3").hide();
    });
	
	$("#q3-2").on("click", function() {
        $("#question2-2").show();
        $("#question2-3").hide();
    });

    $("#question2-1 .yes").on("click", function() {
        $("#question2-2").show();
        $("#question2-1").hide();

    });
	
	
	 
	

    $("#question2-2 .yes").on("click", function() {
        $("#question2-2").hide();
        $("#question3").show();

    });
	
	    

/*    var adjustInnerDivHeight = function() {
        $(".leftcolumn-top").height(function() {

            var parentHeight = $(this).parent().height();
            return parentHeight;

        });   
     }                 
    
    // adjustInnerDivHeight();

    // $(window).resize(function() {
        
    //     $(".row").style("height", "100%");
    //     adjustInnerDivHeight();
    // });

*/ 

});







