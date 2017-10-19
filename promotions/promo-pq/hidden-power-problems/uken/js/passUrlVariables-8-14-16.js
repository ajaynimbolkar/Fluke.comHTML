// JavaScript Document
// This passes url variables into links to eloqua pages
jQuery(document).ready(function()
{
  if(location.search != "") {
    //sets ups the variables to be used
    var passutm = location.search;
    //var utmregex = /(&|^)lcid=\w+/i;
    var utmregex = /(&|^)lcid=([^&#]*)/i;
    var starthref, endhref, newstart, newend, newutm;
    
    //updates <iframe src="..."> with url variables
    jQuery.each(jQuery("iframe"), function(ind, val) {
      if(typeof jQuery(this).attr("src") !== "undefined") {
        //updates the link if there are already query string variables 
        if(jQuery(this).attr("src").indexOf("?") !== -1) {
          var newend;
          //removes lcid if it already exists in the link
          //if(jQuery(this).attr("src").indexOf("lcid=") !== -1){//&& location.search.indexOf("lcid=" !== -1)) {
          switch (jQuery(this).attr("src").indexOf("lcid=")){
            case -1:
              jQuery(this).attr("src", (jQuery(this).attr("src") + "&" + passutm.slice(1)));
              break;
            default:
              switch (location.search.indexOf("lcid")) {
                case -1:
                  newend = "" + jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1);
                  break;
                default:
                  newend = jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1).replace(utmregex, "");             
                  break;
              } 
          //else {
          //  endhref = "&" + jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1);
              if(newend != "" ){//&& endhref.indexOf("&") !== 0) {
                newend = "" + newend + "&";
              }
              if(newend.indexOf("&") == 0){
                newend = newend.slice(1);
              }
              starthref = jQuery(this).attr("src").slice(0, jQuery(this).attr("src").indexOf("?"));
              newutm = passutm.slice(1);
          //updates the link with the utm variables between the link and the other query string variables
              jQuery(this).attr("src", (starthref + "?" + newend + newutm));
            
            break;
          }
        //updates the link if there are # variables
        /*else if(jQuery(this).attr("src").indexOf("#") !== -1) {
          starthref = jQuery(this).attr("src").slice(0, jQuery(this).attr("src").indexOf("#"));
          endhref = jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("#") + 1);
          jQuery(this).attr("src", (starthref + passutm + "#" + endhref));
        }*/
        //updates the link if there are no query string or # variables
       //else {
       //   jQuery(this).attr("src", (jQuery(this).attr("src") + passutm));
       }
      }
    });
    //updates <a href="..."> with the url variables
    jQuery.each(jQuery("a"), function(ind, val){
      if(typeof jQuery(this).attr("href") !== "undefined") {
        //updates the link if there are already query string variables 
        if(jQuery(this).attr("href").indexOf("?") !== -1) {
          //removes lcid if it already exists in the link
          //if(jQuery(this).attr("href").indexOf("lcid=") !== -1){// && location.search.indexOf("lcid" < 0)) {
          switch (jQuery(this).attr("href").indexOf("lcid=")){
            case -1:
              jQuery(this).attr("href", (jQuery(this).attr("href") + "&" + passutm.slice(1)));
              break;
            default:
              switch (location.search.indexOf("lcid")) {
                case -1:
                  endhref = "&" + jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1);
                  break;
                default:
                  endhref = jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1).replace(utmregex, "");
                  if(endhref != "" && endhref.indexOf("&") !== 0) {
                    endhref = "&" + endhref;
                  }
                  break;
              } 
         // else {
          //  endhref = "&" + jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1);
          //}
              starthref = jQuery(this).attr("href").slice(0, jQuery(this).attr("href").indexOf("?"));
          
          //updates the link with the utm variables between the link and the other query string variables
              jQuery(this).attr("href", (starthref + passutm + endhref));
               break;  
             }
          }
        //updates the link if there are # variables
        else if(jQuery(this).attr("href").indexOf("#") !== -1) {
          starthref = jQuery(this).attr("href").slice(0, jQuery(this).attr("href").indexOf("#"));
          endhref = jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("#") + 1);
          jQuery(this).attr("href", (starthref + passutm + "#" + endhref));
        }
        //updates the link if there are no query string or # variables
        else {
          jQuery(this).attr("href", (jQuery(this).attr("href") + passutm));
        }
      }
    });
  }
});