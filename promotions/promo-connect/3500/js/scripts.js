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
             $("#phone").empty().append(

                "<div class='form-group'>" +
                "<label class='elqLabel'>Business Phone*</label>" +
                "<input id='field4' value='' type='text' name='businessPhone' class='elqField form-control'>" +
                "<span class='help-block'>This is a required field</span>" +
                "</div>"
               );

            $("#zip").empty().append( "<div class='form-group'>" +
                "<label class='elqLabel'>Zip or Postal Code*</label>" +
                "<input id='field18' value='' type='text' name='zipOrPostalCode' class='elqField form-control'>" +
                "<span class='help-block'>This is a required field</span>" +
                "</div>");

         } else {

             $("#field20").attr("value", "Learn More");
             $("#phone").empty();
            $("#zip").empty();
         }
     }

     // Swap header image on tab selected
     var tab1 = "#monitoring";
     var tab2 = "#sensors";
     var tab3 = "#preorder";
     var header = $("#header");



     function headerImgChange(i) {
         hash = i;
         if (hash === tab1) {
             header.removeClass("bg2 bg3").addClass("bg1");
         } else if (hash === tab2) {
             header.removeClass("bg1 bg3").addClass("bg2");
         } else if (hash === tab3) {
             header.removeClass("bg1 bg2").addClass("bg3");
         } else {
             header.removeClass("bg2 bg3").addClass("bg1");
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