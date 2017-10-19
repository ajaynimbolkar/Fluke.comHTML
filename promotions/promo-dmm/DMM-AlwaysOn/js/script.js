// JavaScript Document

$(document).ready(function() {

/*
$("section a").on("click", function() {
  
  
  $(this).addClass("radiobtn-active");
})*/
   


	
$("#question2-1, #question2-2, #question2-3, #question3-1, #question3-2, #question3-3").hide();

    $("#q1-a").on("click", function() {
        
		$(this).addClass("radiobtn-active");
		$("#q1-b").removeClass("radiobtn-active");
		$("#q1-b").addClass("radiobtn");
		$("#q1-c").removeClass("radiobtn-active");
		$("#q1-c").addClass("radiobtn");
		
		$("#question2-1").show();
       /* $("#question1").hide();*/
	   $("#question2-2").hide();
	   $("#question2-3").hide();
	    $("#question3-1").hide();
		 $("#question3-2").hide();
		 $("#question3-3").hide();
    });

    $("#q1-b").on("click", function() {
		
		$(this).addClass("radiobtn-active");
		$("#q1-a").removeClass("radiobtn-active");
		$("#q1-a").addClass("radiobtn");
		$("#q1-c").removeClass("radiobtn-active");
		$("#q1-c").addClass("radiobtn");
		
        $("#question2-2").show();
       /*$("#question1").hide();*/
	   $("#question2-1").hide();
	   $("#question2-3").hide();
	    $("#question3-1").hide();
		 $("#question3-2").hide();
		 $("#question3-3").hide();
    });

    $("#q1-c").on("click", function() {
		
		$(this).addClass("radiobtn-active");
		$("#q1-a").removeClass("radiobtn-active");
		$("#q1-a").addClass("radiobtn");
		
		$("#q1-b").removeClass("radiobtn-active");
		$("#q1-b").addClass("radiobtn");
		
        $("#question2-3").show();
      /* $("#question1").hide();*/
	  $("#question2-2").hide();
	   $("#question2-1").hide();
	    $("#question3-1").hide();
		 $("#question3-2").hide();
		 $("#question3-3").hide();
    });
	
	$("#q2-1-a").on("click", function() {
       
	   $(this).addClass("radiobtn-active");
	  
		
	    $("#question3-1").show();
    /*  $("#question2-1").hide();*/
	
	$("#question2-2").hide();
	   $("#question2-3").hide();
	   
		 $("#question3-2").hide();
		 $("#question3-3").hide();
    });
	
	$("#q2-2-a").on("click", function() {
        
		$(this).addClass("radiobtn-active");
		 $("#q2-2-c").removeClass("radiobtn-active");
		$("#q2-2-c").addClass("radiobtn");
		$("#q2-2-b").removeClass("radiobtn-active");
		$("#q2-2-b").addClass("radiobtn");
		$("#q2-2-d").removeClass("radiobtn-active");
		$("#q2-2-d").addClass("radiobtn");
		
		$("#question3-2").show();
      /*  $("#question2-2").hide();*/
	   $("#question2-1").hide();
	
	   $("#question2-3").hide();
	    $("#question3-1").hide();
		
		 $("#question3-3").hide();
    });
	
	$("#q2-2-b").on("click", function() {
        
		$(this).addClass("radiobtn-active");
		$("#q2-2-c").removeClass("radiobtn-active");
		$("#q2-2-c").addClass("radiobtn");
		$("#q2-2-a").removeClass("radiobtn-active");
		$("#q2-2-a").addClass("radiobtn");
		$("#q2-2-d").removeClass("radiobtn-active");
		$("#q2-2-d").addClass("radiobtn");
		
		$("#question3-3").show();
       /*$("#question2-2").hide();*/
	    $("#question2-1").hide();
	
	   $("#question2-3").hide();
	    $("#question3-1").hide();
		 $("#question3-2").hide();
		
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







