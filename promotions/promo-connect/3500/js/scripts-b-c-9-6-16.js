 $("#myModal").on("shown.bs.modal", function() {
     $("#myInput").focus();
 });

 $(document).ready(function() {
     $("#content-tab").tabCollapse();

     // Change direction of arrow on accordion navigation
     $("#content-tab a").on("click", function() {

         $("span.glyphicon-chevron-down").toggleClass("glyphicon-chevron-down glyphicon-chevron-right");

         if ($(this).hasClass("collapsed")) {
             $(this).children().last().toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
         }

     });


     $(".help-block").hide();

     // Change button text based on radio selected
     $("input[name=optionsRadios]").click(btnTxtChange);
     $(".contact-me-cta, #contact-me").click(function() {
         $("#ProdLineChange").prop("checked", true);
         btnTxtChange();
     });

     $(".learn-more-cta").click(function() {
         $("#LearnMore").prop("checked", true);
         btnTxtChange();
     });

     function btnTxtChange() {
         if ($("#ProdLineChange").is(":checked")) {

             $("#field20").attr("value", "Contact Me");

         } else {

             $("#field20").attr("value", "Learn More");
         }
     }

     // Swap header image on tab selected
     var tab2 = "#monitoring";
     var tab3 = "#sensors";
     var tab1 = "#preorder";
     var header = $("#header");



     function headerImgChange(i) {
         hash = i;
         if (hash === tab1) {
             header.removeClass("bg2 bg3").addClass("bg1");
             $("#welcome-offer").show();
         } else if (hash === tab2) {
             header.removeClass("bg1 bg3").addClass("bg2");
             $("#welcome-offer").hide();
         } else if (hash === tab3) {
             header.removeClass("bg1 bg2").addClass("bg3");
             $("#welcome-offer").hide();
         } else {
             header.removeClass("bg2 bg3").addClass("bg1");
             $("#welcome-offer").show();
         }
     }

     $("#content-tab li a").on("click", function() {
         var i = $(this).attr("href");
         headerImgChange(i);
     });

     $(function() {
         var hash = document.location.hash;
         headerImgChange(hash);
     });




 });