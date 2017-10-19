// JavaScript Document

$(document).ready(function() {

	
$("#question2, #question3, #question4, #question5").hide();


/* Question 1 */
$("#q-next-1").on("click", function() {
        $("#question2").show();
        $("#question1").hide();
    });
	
	$("#q-next-2").on("click", function() {
        $("#question3").show();
        $("#question2").hide();
    });
	
	$("#q-next-3").on("click", function() {
        $("#question4").show();
        $("#question3").hide();
    });
	
	$("#q-next-4").on("click", function() {
        $("#question5").show();
        $("#question4").hide();
    });
	
	
	
/*$("#q1-1").on("click", function() {
  
 
  $(this).addClass("question-active");
  });
  
  
  
  $("#q1-2").on("click", function() {
  
 
  $(this).addClass("question-active");
  });
  
  
  
  $("#q1-3").on("click", function() {
  
 
  $(this).addClass("question-active");
  });
  
  
  
  $("#q1-4").on("click", function() {
  
 
  $(this).addClass("question-active");
  });*/
  
$('label').click(function() {
   $(this).addClass("question-active")
          .siblings('label').removeClass("question-active");
});  
  
  
 /* $("label").on("click", function() {
  
 
  $(this).toggleClass("question-active");
  });*/

/*$("#q1-2").on("click", function() {
        $("#question2").show();
        $("#question1").hide();
    });
	
$("#q1-3").on("click", function() {
        $("#question2").show();
        $("#question1").hide();
    });
	
$("#q1-4").on("click", function() {
        $("#question2").show();
        $("#question1").hide();
    });*/


/*Question 2 */	
/*$("#q2-1").on("click", function() {
        $("#question3").show();
        $("#question2").hide();
    });

$("#q2-2").on("click", function() {
        $("#question3").show();
        $("#question2").hide();
    });
	
$("#q2-3").on("click", function() {
        $("#question3").show();
        $("#question2").hide();
    });
	
$("#q2-4").on("click", function() {
        $("#question3").show();
        $("#question2").hide();
    });*/


/* Question 1 */
/*$("#q3-1").on("click", function() {
        $("#question4").show();
        $("#question3").hide();
    });

$("#q3-2").on("click", function() {
    $("#question4").show();
        $("#question3").hide();
    });
	
$("#q3-3").on("click", function() {
    $("#question4").show();
        $("#question3").hide();
    });
	
$("#q3-4").on("click", function() {
 $("#question4").show();
        $("#question3").hide();
    });
*/

/*Question 2 */	
/*$("#q4-1").on("click", function() {
        $("#question5").show();
        $("#question4").hide();
    });

$("#q4-2").on("click", function() {
        $("#question5").show();
        $("#question4").hide();
    });
	
$("#q4-3").on("click", function() {
         $("#question5").show();
        $("#question4").hide();
    });
	
$("#q4-4").on("click", function() {
         $("#question5").show();
        $("#question4").hide();
    });*/







});







