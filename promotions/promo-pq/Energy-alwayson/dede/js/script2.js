// JavaScript Document

$(document).ready(function() {



    $('#nextstep1').on('click',
        function chkForm(event) {

            event.preventDefault();

            var form = $('#FPQ1');
            var page = 0;
            var checkbox_FPQ = $('form#FPQ1 input[type="checkbox"]');

            if (checkbox_FPQ[5].checked || (checkbox_FPQ[5].checked && (checkbox_FPQ[0].checked || checkbox_FPQ[1].checked || checkbox_FPQ[2].checked || checkbox_FPQ[3].checked || checkbox_FPQ[4].checked))) {
                page = 2;
                showPage(page);
            }
            else if (checkbox_FPQ[0].checked || checkbox_FPQ[1].checked || checkbox_FPQ[2].checked || checkbox_FPQ[3].checked || checkbox_FPQ[4].checked) {
                page = 1;
                showPage(page);
            }
            else {
                alert("Please make a selection");
                return false;

            } //end if/else chkbox_FPQ[]

        }); //end chkForm()



    function showPage(page) {
	
	var passutm = location.search;  
		

        if (page === 1) {
			
			window.location.href = "step2-powerquality.html" + passutm;
          /*  $("#page2-1").show();
            $("#page2-2, #page1, #page3-1").hide();*/
        }
        else if (page === 2) {
			window.location.href = "step2-energy.html" + passutm;
           /* $("#page2-1, #page1, #page3-1").hide();
            $("#page2-2").show();*/
        } 
		/*else if (page === 0) {
            alert("hij doet het niet");
            return false;
        }*/
		

    } //end showPage(showQuestPg)


 /*$(".nextstep > span").on("click", function() {
        $("#page2-1, #page2-2 ").hide();
        $("#page3-1").show();
    });*/
	
$("#question2-1, #question2-2, #question2-3, #question3").hide();

    
    $("#q1-2").on("click", function() {
        $("#question2-1").show();
        $("#question1").hide()
    });

    $("#q1-3").on("click", function() {
        $("#question2-3").show();
        $("#question1").hide()
    });
	
	$("#q3-2").on("click", function() {
        $("#question2-2").show();
        $("#question2-3").hide()
    });

    $("#question2-1 .yes").on("click", function() {
        $("#question2-2").show();
        $("#question2-1").hide()

    });
	
	
	 
	

    $("#question2-2 .yes").on("click", function() {
        $("#question2-2").hide();
        $("#question3").show()

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







