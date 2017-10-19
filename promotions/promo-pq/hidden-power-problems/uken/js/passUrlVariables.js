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
        //checks if the link has query string variables 
        if(jQuery(this).attr("src").indexOf("?") !== -1) {
          var newend;
          //checks if the link has lcid variable
          switch (jQuery(this).attr("src").indexOf("lcid=")){
            //if there is no lcid in link then add the variables to the end of the link
            case -1:
              jQuery(this).attr("src", (jQuery(this).attr("src") + "&" + passutm.slice(1)));
            break; 
            default:
              //checks if the url has lcid variable
              switch (location.search.indexOf("lcid")) {
                //if url doesn't have lcid then keep the link lcid
                case -1:
                  newend = "" + jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1);
                break;
                //if url doesn't have lcid then keep the link lcid
                default:
                  newend = jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1).replace(utmregex, "");             
                break;
              } 
              //add & before adding variables to the end of the link
              if(newend != "" ) {
                newend = "" + newend + "&";
              }
              //remove & from the end if needed
              if(newend.indexOf("&") == 0){
                newend = newend.slice(1);
              }
              //updates the link with the utm variables at the end of the link
              starthref = jQuery(this).attr("src").slice(0, jQuery(this).attr("src").indexOf("?"));
              newutm = passutm.slice(1);
              jQuery(this).attr("src", (starthref + "?" + newend + newutm));
            break;
          }
        }
      }
    });
    //updates <a href="..."> with the url variables
    jQuery.each(jQuery("a"), function(ind, val){
      if(typeof jQuery(this).attr("href") !== "undefined") {
        //checks if the link has query string variables  
        if(jQuery(this).attr("href").indexOf("?") !== -1) {
          //checks if the link has lcid variable
          switch (jQuery(this).attr("href").indexOf("lcid=")){
            //if there is no lcid in link then add the variables to the end of the link
            case -1:
              jQuery(this).attr("href", (jQuery(this).attr("href") + "&" + passutm.slice(1)));
            break;
            default:
              //checks if the url has lcid variable
              switch (location.search.indexOf("lcid")) {
                //if url doesn't have lcid then keep the link lcid
                case -1:
                  endhref = "&" + jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1);
                break;
                //if url doesn't have lcid then keep the link lcid
                default:
                  endhref = jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1).replace(utmregex, "");
                  if(endhref != "" && endhref.indexOf("&") !== 0) {
                    endhref = "&" + endhref;
                  }
                break;
              }
              //updates the link with the utm variables between the link and the other query string variables 
              starthref = jQuery(this).attr("href").slice(0, jQuery(this).attr("href").indexOf("?"));
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