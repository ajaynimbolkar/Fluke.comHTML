var _qlqQ = -elqQ || []; // Set Up Queue
_elqQ.push(['elqSetSiteId','1182545284']); // Open Connection for E10 Instance
_elqQ.push(['elqTrackPageViewDisplayOptInBannerByCountry']); // Push Command to Track Page Views

(function (){ // Async Load Function for the DOM
		function async_load(){
			var s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.src = '//img.en25.com/i/elqCfg.min.js';
			var x = document.getElementsByTagName('script')[0];
			x.parentNode.insertBefore(s,x);
		}
		if (window.addEventListener) 
			window.addEventListener('DOMContentLoaded', async_load, false);
		else if (window.attachEvent)
			window.attachEvent('onload', async_load);
})();

function elqVisitoryTrackingOptIn(){
	_elqQ.push(['elqOptIn']);
}

function elqVisitorTrackingOptOut(){
	_elqQ.push(['elqOptOut']);
}


function elqCreateOptInBanner() {
if (navigator.appVersion.indexOf('MSIE') != -1) {
var css = '.elqOptInBanner {position: absolute; top: 0px; left: 0px; width: 100%; border:solid 1px #c0c0c0; background-color:#e1e1e1; font-size:11px; font-family:verdana; color:#000; padding:5px;} .elqOptInBannerText {float: left; text-align:left; width:96%;} .elqButton {font-size:11px; color:#000; padding:3px;} .elqClose {float:right; font-size:14px; font-weight:bold; cursor:pointer; padding-right:15px;} ';
}
else {
var css = '.elqOptInBanner {position: fixed; top: 0px; left: 0px; width: 100%; border:solid 1px #c0c0c0; background-color:#e1e1e1; font-size:11px; font-family:verdana; color:#000; padding:5px;} .elqOptInBannerText {float: left; text-align:left; width:96%;} .elqButton {font-size:11px; color:#000; padding:3px;} .elqClose {float:right; font-size:14px; font-weight:bold; cursor:pointer; padding-right:15px;} ';}
var style = document.createElement('STYLE');
style.type = 'text/css';
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
var head = document.getElementsByTagName('head')[0];
head.appendChild(style);
var div = document.createElement('div');
div.setAttribute('id', 'elqOptInBannerDiv');
div.className = 'elqOptInBanner';
div.innerHTML = '<div class="elqOptInBannerText" >Fluke would like to use cookies to store information on your computer which will help to customize your interactions with us and provide you with a better browsing experience. You may delete and block cookies from this site, but parts of the site may not function as a result. More information about cookies and your choices can be found in our Privacy Policy. To accept cookies from this site, please click the \'I Accept\' button below.&nbsp;&nbsp;&nbsp;<input type="button" id="elqOptInButton" value="I Accept" onClick="elqVisitorTrackingOptIn();document.getElementById(\'elqOptInBannerDiv\').style.display = \'none\';" class="elqButton" />&nbsp;&nbsp;<input type="button" id="elqOptOutButton" value="I Decline" onClick="elqVisitorTrackingOptOut();document.getElementById(\'elqOptInBannerDiv\').style.display = \'none\';" class="elqButton" /></div><div class="elqClose" onclick="document.getElementById(\'elqOptInBannerDiv\').style.display = \'none\';">x</div>';
document.body.appendChild(div);
}