function fnKeyInSearchHdr(e) {
	if (!e)
		e = window.event;
	if (e.keyCode == 13) {
		return fnSearchKeywordHdr();
	}
}

var checkFocusHdr;

function fnSearchKeywordHdr() {
	__CMS_PostbackFormBeenReset = true;

	if (trim(document.getElementById('txtHdrSearchBox').value) != "" && trim(document.getElementById('txtHdrSearchBox').value) != searchBoxText) {
		//Code added for Google Search Implementation
		var searchruru = "/ruru/";
		var match = strPathPrefix.search("ruru");
		var iev = "UTF-8";
		var cofv = "FORID:11;NB:1";
		var cxv = "013681799554439968867:rk8dy-qnyac";
		var qv = trim(document.getElementById('txtHdrSearchBox').value);

		if (match != "-1") {
			//alert('1');
			document.location.href = strPathPrefix + '/home/Search.htm?cx=' + cxv + '&cof=' + cofv + '&ie=' + iev + '&q=' + qv + '&resources=' + strRsrc + '&txtCriteria=' + encodeURIComponent(trim(document.getElementById('txtHdrSearchBox').value));
		} else {
			//alert('2');
			document.location.href = strPathPrefix + '/home/Search.htm?resources=Resources&txtCriteria=' + encodeURIComponent(trim(document.getElementById('txtHdrSearchBox').value));
		}
		return false;
		//return true;
	} else {
		alert(searchBoxInvalidText);
		document.getElementById('txtHdrSearchBox').focus();
		return false;
	}
}

function fnClearSearchHdr() {
	if (trim(document.getElementById('txtHdrSearchBox').value) == searchBoxText) {
		document.getElementById('txtHdrSearchBox').value = "";
	}
}

function fnEmptySearchHdr() {
	if (trim(document.getElementById('txtHdrSearchBox').value) == "") {
		document.getElementById('txtHdrSearchBox').value = searchBoxText;
	}
}

function changeActionOnFormAndSubmit(newAction, newMethod) {
	var theForm = document.forms['cse-search-box'];
	if (!theForm) {
		theForm = document.cse - search - box;
	}
	theForm.action = newAction;
	theForm.method = newMethod;
	theForm.submit();
}

function trackEvent(mode, href){
	switch(mode){
		case "video":
			_gaq.push(['_trackEvent', 'Videos', 'Start', href])
			break;
		case "download":
			_gaq.push(['_trackEvent', 'Downloads', 'Download', href])
			break;
	}
}

function initSearchVariables(){
	document.getElementById('txtHdrSearchBox').value = searchBoxText;
	document.getElementById('imgSearch').setAttribute('alt', searchBoxText);
}

$(document).ready(function(){
	//attach events to elements that need tracking (use classes:"track_video" or "track_download")
	$('.track_download').click(function(e){
		trackEvent('download', this.getAttribute("href"));
	});		
	$('.track_video').click(function(e){
		trackEvent('video', this.getAttribute("href"));
	});		
	initSearchVariables();
});
