// JavaScript Document
// This passes url variables into links to eloqua pages
jQuery(document).ready(function()
{
if(location.search != ""){
	var passutm = location.search;
	jQuery.each(jQuery(".pass-url-variables"), function(ind, val){
		if(typeof jQuery(this).attr("src") != "undefined")
		{
			if(jQuery(this).attr("src").indexOf("?") != -1)
			{
				var starthref = jQuery(this).attr("src").slice(0, jQuery(this).attr("src").indexOf("?"));
				var endhref = jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1);
				jQuery(this).attr("src", (starthref + passutm + "&" + jQuery(this).attr("src").slice(jQuery(this).attr("src").indexOf("?") + 1 )));
			}
			else
			{
				jQuery(this).attr("src", (jQuery(this).attr("src") + passutm));
			}
		}
		else if(typeof jQuery(this).attr("href") != "undefined")
		{
			if(jQuery(this).attr("href").indexOf("?") != -1)
			{
				var starthref = jQuery(this).attr("href").slice(0, jQuery(this).attr("href").indexOf("?"));
				var endhref = jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1);
				jQuery(this).attr("href", (starthref + passutm + "&" + jQuery(this).attr("href").slice(jQuery(this).attr("href").indexOf("?") + 1 )));
			}
			else
			{
				jQuery(this).attr("href", (jQuery(this).attr("href") + passutm));
			}
		}
	});
}
});