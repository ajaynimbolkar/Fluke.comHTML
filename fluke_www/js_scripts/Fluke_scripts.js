/*
 * CVS Data
 * ----------------------------------------------------------------------------
 * $Source: D:/CVSREPO/FNET/fluke_www2/fluke_www/js_scripts/Fluke_scripts.js,v $
 * $Author: GLOBAL\ashajapu $
 * $Revision: 1.10 $
 * $Date: 2013/03/29 06:41:52 $
 * $Log: Fluke_scripts.js,v $
 * Revision 1.10  2013/03/29 06:41:52  GLOBAL\ashajapu
 * Migration of Google map api from v2 to v3.0
 *
 * Revision 1.9  2011/09/26 05:42:24  ntikekar
 * RI 1712 , Add parameter to fnChkBiomedical() function- and Store front phrase
 *
 * Revision 1.8  2011/09/22 06:06:02  ntikekar
 * RI 1712 , Add parameter to fnChkBiomedical() function
 *
 * Revision 1.7  2011/01/18 05:26:58  hsanghav
 * 1409
 *
 * Revision 1.6  2010/10/22 06:06:24  AAyachit
 * For item 1208 USES-WTB
 *
 * Revision 1.5  2010/02/22 18:21:11  jjoshi
 * *** empty log message ***
 *
 * Revision 1.4  2010/02/22 16:28:12  jjoshi
 * search button redirection logic updated
 *
 * Revision 1.3  2010/01/14 13:05:25  ajana
 * search functionality update
 *
 * Revision 1.2  2009/10/29 12:30:50  ajana
 * added new function
 *
 * Revision 1.1  2009/10/26 15:31:11  shumphr1
 * *** empty log message ***
 *
 * Revision 1.6  2009/10/20 08:10:33  ajana
 * CleanElementsForMozilla method added.
 *
 * Revision 1.5  2009/10/09 17:41:52  ajana
 * marquee updates
 *
 * Revision 1.4  2009/09/30 17:14:48  ajana
 * *** empty log message ***
 *
 * Revision 1.3  2009/09/17 13:35:39  ajana
 * *** empty log message ***
 *
 * Revision 1.2  2009/09/08 14:34:33  ajana
 * added function(addtofavorites)
 *
 * Revision 1.1  2009/08/19 11:45:31  AAyachit
 * Initial Creation
 *

*/


// JScript File

function CleanElementsForMozilla()
{
 var iCnt;
 if(navigator.userAgent.indexOf("Firefox") != -1)
 {
     for(iCnt=0;iCnt<document.forms[0].length;iCnt++) 
        { 
                if(document.forms[0].elements[iCnt].type == "text" ||document.forms[0].elements[iCnt].type == "select-one")
                {
                    document.forms[0].elements[iCnt].style.backgroundColor="white";
    	        }
        }
  }  
  return false;
}

function GenerateScript(strDivName,strFilePath,strHeight,strWidth)
{
    
    var hasReqestedVersion = DetectFlashVer(8, 3, 0);
    if (hasReqestedVersion)
    {
        var so;
        if(strDivName=='flashcontent')
        {
            so = new SWFObject('http://us.dev.fluke.com/images/Web2_0/flash/DynamicSample2/Test_flash_260x260.swf','fnetintro',strHeight,strWidth, '8', '#ffffff');
        }
        else
        {
            so = new SWFObject('http://us.dev.fluke.com/images/Web2_0/flash/DynamicSample2/Test_flash_260x260.swf','fnetintro',strHeight,strWidth, '8', '#ffffff');
        }
        so.addParam("allowScriptAccess", "always");
        so.addParam("wmode", "transparent");
        so.addParam("base",strFilePath);
        so.write(strDivName);
    }
    else
    {
        if(document.getElementById('flashcontent') != null &&strDivName== 'flashcontent')
        {
            document.getElementById('flashcontent').innerHTML= "<a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' target='_adob'><img src='/Fluke_www/images/Web2_0/flash/no_flash_main_content_banner_670px_x_220px.gif' border='0'></img></a>";
        }
        if(document.getElementById('dvRC1') != null && strDivName== 'dvRC1')
        {
            document.getElementById('dvRC1').innerHTML= "<a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' target='_adob'><img src='/Fluke_www/images/Web2_0/flash/no_flash_side_column_bar_banner_260px_x_260px.gif' border='0'></img></a>";
        }
        if(document.getElementById('dvRC2') != null && strDivName== 'dvRC2')
        {
            document.getElementById('dvRC2').innerHTML= "<a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' target='_adob'><img src='/Fluke_www/images/Web2_0/flash/no_flash_side_column_bar_banner_260px_x_260px.gif' border='0'></img></a>";
        }
        if(document.getElementById('dvRC3') != null && strDivName== 'dvRC3')
        {
            document.getElementById('dvRC3').innerHTML= "<a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' target='_adob'><img src='/Fluke_www/images/Web2_0/flash/no_flash_side_column_bar_banner_260px_x_260px.gif' border='0'></img></a>";
        }
        if(document.getElementById('dvRC4') != null && strDivName== 'dvRC4')
        {
            document.getElementById('dvRC4').innerHTML= "<a href='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' target='_adob'><img src='/Fluke_www/images/Web2_0/flash/no_flash_side_column_bar_banner_260px_x_260px.gif' border='0'></img></a>";
        }
    }
}

function PopItUp(sURL,W,H)
{
	window.open(sURL,'','status=no,height='+H+',width='+W+',scrollbars=1,resizable=1,toolbar=0');
}

function CleanElementsForMozilla()
{
 var iCnt;
 if(navigator.userAgent.indexOf("Firefox") != -1)
 {
     for(iCnt=0;iCnt<document.forms[0].length;iCnt++) 
        { 
                if(document.forms[0].elements[iCnt].type == "text" ||document.forms[0].elements[iCnt].type == "select-one")
                {
                    document.forms[0].elements[iCnt].style.backgroundColor="white";
    	        }
        }
  }  
  return false;
}

<!--

// Use this function to display and hide blocks of HTML 
function ShowHide(blockID){
  var wid = eval('document.all.'+blockID);
  if (wid.style.display == 'none') { 
    wid.style.display = 'block';
    }
  else {
    wid.style.display = 'none';
    }
}

// Use this function to display and hide blocks of HTML and swap out the arrow image to show that something is hidden or displayed
// NOTE: the SRC of arrow images are hard coded here. be careful where you call this function from
function ShowHideArrow(blockID,imgID){
  var wid = eval('document.all.'+blockID);
  var imgArrow= eval('document.all.'+imgID);
  var imgArrowOn = '../../images/Arrow_down.gif';
  var imgArrowOff = '../../images/Arrow_right.gif';

  if (wid.style.display == 'none') { 
    wid.style.display = 'block';
    imgArrow.src = imgArrowOn;
    }
  else {
    wid.style.display = 'none';
    imgArrow.src = imgArrowOff;
    }
}

function addToFavorites() 
{ 
	try
	{
		if (window.sidebar) 
			{ 
				window.sidebar.addPanel(document.title, location.href,"");
			}
		else
			{
				window.external.AddFavorite(location.href, document.title);
			}	
	}
	catch(err)
	{
		alert('Unable to add this page to Favorites menu');
	}
} 

function checkEmail(myForm) 
{
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.Email.value)){
	return (true)
	}
	//alert("Invalid E-mail Address! Please re-enter.")
	return (false)
}

function trim(str, chars) 
{
	return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}

function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

//Validation function for "Tell your story" page.
function theCheckForm(qId,exAction)
{
    //alert(qId);
	var strAlert="";
	var strFocus="";
	
	var objForm = document.forms[0];	
	
	if (trim(objForm.Name.value)=="")
	{
		strAlert = strAlert + "Please enter Name.\n"; 
		strFocus="objForm.Name" + ".focus()";
	}
	if (checkEmail(objForm)== false)
	{
		strAlert = strAlert + "Invalid E-mail Address.Please re-enter.\n"; 
		if (strFocus=="")
		{
			strFocus="objForm.Email" + ".focus()";
		}
	}
	
	var quesId = "objForm.q" + qId;
	var quesLen = quesId + ".value.length";
	var q = eval(quesLen);
	
	if (q < 2){
	//alert('Please answer the question before submitting');
		strAlert=strAlert + "Please answer the question before submitting.\n";
		if (strFocus=="")
		{   
			strFocus = quesId + ".focus()";
		}
	}
	else if (q > 1024) {
	//alert('Answer text is limited to 1024 characters.  Your answer has ' + q + ' characters.');
		strAlert=strAlert + 'Answer text is limited to 1024 characters.  Your answer has ' + q + ' characters.\n';
		if (strFocus=="")
		{
			strFocus = quesId + ".focus()";
		}
	}
	
	if (strAlert != "")
	{
		alert(strAlert);
		eval(strFocus);
		return false;
	}
	else
	{
	    objForm.action = exAction;
		objForm.submit();
		return true;
	}
}

//Plus archive search function
function fnPlsSearchKeyword(txtBoxId,hidCatId,hidCatDispNameId,strMsg,exAction)
{  
    __CMS_PostbackFormBeenReset = true;
    var objForm = document.forms[0];
	if(trim(document.getElementById(txtBoxId).value)!="")
	{
		document.getElementById(hidCatId).value = "";
		document.getElementById(hidCatDispNameId).value = "";
//		objForm.method = "post";
//		objForm.action = exAction;
//		objForm.submit();        
        document.location.href = exAction+'?txtSearchData='+document.getElementById(txtBoxId).value;
        return false;
		//return true;									
	}
	else
	{
		//alert("Please enter keyword to search.");
		if(strMsg=="")
		{
		    alert("Please enter keyword to search.");
		}
		else
		{
		    alert(strMsg)
		}
		document.getElementById(txtBoxId).value="";
		document.getElementById(txtBoxId).focus();
		return false;
	}
}

//Plus archive key in search function
function fnPlsArchKeyInSearch(e)
{
    if (!e) e = window.event;
    if(e.keyCode==13)
    {       
        return fnPlsSearchKeyword(txtSearchDataID,hidCategoryID,hidCatDispNameID,msgDisp,postingUrl);
    }
}

//Category links
function fnGetCatArticles(txtBoxId,strCat,strCatDispName,hidCatId,hidCatDispNameId)
{    
    var objForm = document.forms[0];
	document.getElementById(txtBoxId).value = "";
	document.getElementById(hidCatId).value = strCat;
	document.getElementById(hidCatDispNameId).value = strCatDispName;	
	objForm.method = "post";	
	objForm.submit();
}

//Plus feature search function
function fnFeatureSearchKeyword(strMsg,exAction)
{   
    __CMS_PostbackFormBeenReset = true;
    var objForm = document.forms[0];
	if(trim(document.getElementById("txtSearchData").value) !="")
	{	
//		objForm.method = "post";
//		objForm.action = exAction;
//		objForm.submit();
		//return true;
		document.location.href = exAction+'?txtSearchData='+document.getElementById("txtSearchData").value;;
		return false;								
	}
	else
	{
		//alert("Please enter keyword to search.");
		if(strMsg=="")
		{
		    alert("Please enter keyword to search.");
		}
		else
		{
		    alert(strMsg)
		}
		document.getElementById("txtSearchData").value="";
		document.getElementById("txtSearchData").focus();
		return false;
	}
}

//Plus feature search key in function
function fnSearchFunction(e,msgDisp,plsArchivePath)
{
    if (!e) e = window.event;
    if(e.keyCode==13)
    {
        return fnFeatureSearchKeyword(msgDisp,plsArchivePath);
    }
}


        
function autoSubmit()
{
	document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
	var productSource = document.getElementById(ddlProduct).value;
	productSource = productSource.substring(2, productSource.length);
	if(productSource == "DISTRIBUTORS") 
	{
		if(document.getElementById(ddlLocationType).value != "0")
		{
			document.getElementById(hidIsPostBack).value=1;
			document.forms[0].submit();
		}
	}
	
}
        function Trim(TRIM_VALUE)
				{
					if(TRIM_VALUE.length < 1){
						return"";
					}
					TRIM_VALUE = RTrim(TRIM_VALUE);
					TRIM_VALUE = LTrim(TRIM_VALUE);
					if(TRIM_VALUE=="")
					{
						return "";
					}
					else
					{
					return TRIM_VALUE;
					}
			}
		function RTrim(VALUE)
		{
			var w_space = String.fromCharCode(32);
			var v_length = VALUE.length;
			var strTemp = "";
			if(v_length < 0){
			return"";
			}
			var iTemp = v_length -1;

			while(iTemp > -1){
			if(VALUE.charAt(iTemp) == w_space){
			}
			else{
			strTemp = VALUE.substring(0,iTemp +1);
			break;
			}
			iTemp = iTemp-1;
			} //End While
			return strTemp;
		} 
		function LTrim(VALUE)
		{
			var w_space = String.fromCharCode(32);
			if(v_length < 1){
			return"";
			}
			var v_length = VALUE.length;
			var strTemp = "";
			var iTemp = 0;
			while(iTemp < v_length)
			{
			if(VALUE.charAt(iTemp) == w_space)
			{
			}
			else
			{
			strTemp = VALUE.substring(iTemp,v_length);
			break;
			}
			iTemp = iTemp + 1;
			} //End While
			return strTemp;
		} 
        function fnResetCityState()
		{
			//reset city and state
			document.getElementById(txtCity).value="";
			document.getElementById(ddlState).options[0].selected=true;	
		}
		function fnResetZip()
		{
			//reset zip
			document.getElementById(txtZip).value="";
		}
		
		function fnaddOption(index,strText,strValue)
		{
			var optn = document.createElement ("OPTION");
			optn.text = strText;
			optn.value = strValue;
			document.getElementById(ddlLocationType).options[index] = optn;
		}
		
		
		function openwindow(url) 
		{   
		var options = 'scrollbars=yes,resizable=yes,status=yes,toolbar=yes,menubar=yes,location=yes';    
		options += ',width=' + screen.availWidth + ',height=' + screen.availHeight;    
		options += ',screenX=0,screenY=0,top=0,left=0';    
		var win = window.open(url, '', options);    
		win.focus();    
		win.moveTo(0, 0); 
		}
		
function fnChkBiomedical(locale)
{
	var arrSource;
	document.getElementById(ddlState).disabled = false;
	document.getElementById(txtCity).disabled = false;

	//If biomedical products selected then open biomedical site in new window
	if(Trim(document.getElementById(ddlProduct).value)=="-1,FBC") 
	{
		var appName;
		if(appName = 'Microsoft Internet Explorer')
		{
			openwindow("http://www.flukebiomedical.com/biomedical/usen/wheretobuy/default");
		}
		else
		{
			window.open("http://www.flukebiomedical.com/biomedical/usen/wheretobuy/default","_blank","status=1,toolbar=1,menubar=1,location=1,resizable=1,scrollbars=1;Maximized=1");
			//window.open("/busen/wtb/default","_blank","status=1,toolbar=1,menubar=1,location=1,resizable=1,scrollbars=1;Maximized=1");
		}
	}
	
	if(Trim(document.getElementById(ddlProduct).value)!="-1,") 
	{
		arrSource = Trim(document.getElementById(ddlProduct).value).split(",");

		switch(arrSource[1])
		{
		case "DISTRIBUTORS":
			document.getElementById(ddlLocationType).options.length=0;
			 if(locale=="usen"){
		  
			    fnaddOption(0,"Store Front","0");
			    fnaddOption(1,"Online","3");
			    fnaddOption(2,"Catalog","4");												
		  }
		  else{
		  		fnaddOption(0,"En Tienda","0");
			    fnaddOption(1,"Tienda en línea","3");
			    fnaddOption(2,"Catálogo","4");	
		  
		  }
		break;    											
		break;    
		case "TREP":
			document.getElementById(ddlLocationType).options.length=0;
			var optn = document.createElement ("OPTION");
			optn.text = "Sales Representative";
			optn.value = "5";
			document.getElementById(ddlLocationType).options[0] = optn;
		break;
		case "IE":
			document.getElementById(ddlLocationType).options.length=0;
			var optn = document.createElement ("OPTION");
			optn.text = "Sales Representative";
			optn.value = "5";
			document.getElementById(ddlLocationType).options[0] = optn;
			document.getElementById(ddlState).disabled = true;
			document.getElementById(txtCity).disabled = true;
			document.getElementById(txtCity).value = '';
		break;	
		case "HARTPHONE":
			document.getElementById(hidIsPostBack).value=1;
			document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
			document.forms[0].submit();
			return true;					
		case "DHIPHONE":					
			document.getElementById(hidIsPostBack).value=1;
			document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
			document.forms[0].submit();
			return true;
		break;									
		}
	}
}
		
		
function fnValidateform()
{
    __CMS_PostbackFormBeenReset = true;
    var objForm = document.forms[0];
	var bRetVal;
	var strMsg;
	var strZip;
	bRetVal=false;
	strMsg="";
		
	//Validations
	//Product - ddlProduct
	if(Trim(document.getElementById(ddlProduct).value)=="-1,") 
	{
		//strMsg = strMsg + "-Please select a product\n";
		strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_1).value;
	}
	
	document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
    	
	if(document.getElementById(ddlLocationType).value==3 || document.getElementById(ddlLocationType).value==4 ) //for ecommerce and catalog locations
	{
		if(Trim(document.getElementById(ddlProduct).value) != "-1,")
		{
		  document.getElementById(hidIsPostBack).value=1;
		  document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
		  objForm.method = "post";
		  objForm.submit();
		  return true;
		}
	}
	
	//Location Type - ddlLocationType
	//zip - txtZip
	//City - txtCity
	//State - ddlState
	if(document.getElementById(ddlLocationType).value==0)
	{
	    document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
		if(Trim(document.getElementById(txtZip).value)=="" && Trim(document.getElementById(txtCity).value)=="" && Trim(document.getElementById(ddlState).value)=="") 
		{
			//strMsg = strMsg + "-Enter Zip Code or city/state to search.\n";
			strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_2).value;
		}			
		else if (Trim(document.getElementById(txtZip).value)=="" && (Trim(document.getElementById(txtCity).value)=="" || Trim(document.getElementById(ddlState).value)==""))
		{
			//strMsg = strMsg + "-Enter City and Select State to search.\n";
			strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_3).value;
		}		
		else
		{
			if(Trim(document.getElementById(txtZip).value)!="")
			{
				strZip=Trim(document.getElementById(txtZip).value); 
				
				var s = new String(strZip);
				var bIsZipValid;
				bIsZipValid=true;
				
				var reUSZip = /^\d{5}([\-]\d{4})?$/;
				if(reUSZip.test(s)==false)
				{
					bIsZipValid=false;
				}


				for (var i=0; i < s.length; i++)
				{
					if ((s.charAt(i) < '0' || s.charAt(s) > '9') && s.charAt(i) != '-')
					{
						bIsZipValid=false;
						break;
					}
				}	
				
				if(bIsZipValid==false)
				{
					//strMsg = strMsg + "-Please enter valid zip code.\n";
					strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_4).value;
				} 
			}
		}
	}
	
	if(document.getElementById(ddlLocationType).value==5) //Sales representative
	{
		var source = document.getElementById(ddlProduct).value;
		source = source.substring(3, source.length);
	 	if(source == "IE")
		{
			if(Trim(document.getElementById(txtZip).value)=="")
			{
				//strMsg = strMsg + "-Enter Zip Code to search.\n";
				strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_5).value;
			}
			else
			{
				strZip=Trim(document.getElementById(txtZip).value); 
				
				var s = new String(strZip);
				var bIsZipValid;
				bIsZipValid=true;
				
				var reUSZip = /^\d{5}([\-]\d{4})?$/;
				if(reUSZip.test(s)==false)
				{
					bIsZipValid=false;
				}

				for (var i=0; i < s.length; i++)
				{
					if ((s.charAt(i) < '0' || s.charAt(s) > '9') && s.charAt(i) != '-')
					{
						bIsZipValid=false;
						break;
					}
				}	
				
				if(bIsZipValid==false)
				{
					//strMsg = strMsg + "-Please enter valid zip code.\n";
					strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_4).value;
					
				}

			}

			if(strMsg!="") 
			{
					/*  //Commented by Nitin due to duplicate alerts.
					//alert(strMsg);	*/
			}
			else
			{
				document.getElementById(hidIsPostBack).value=1;
				document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
				objForm.submit();
				return true;
			}

		}
		else
		{
		   if(Trim(document.getElementById(txtZip).value)=="" && Trim(document.getElementById(txtCity).value)=="" && Trim(document.getElementById(ddlState).value)=="") 
			{
				if(strMsg.length <= 0)
				{	//strMsg = strMsg + "-Enter Zip Code or city/state to search.\n";	
				    strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_2).value;
				}
			}
				else if(Trim(document.getElementById(txtZip).value)=="" && Trim(document.getElementById(ddlState).value)=="")	
			{
				if(strMsg.length <= 0)
				{	//strMsg = strMsg + "-Enter Zip Code or select a state to search.\n";	
					strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_6).value;	
				}
				
			}
			else
			{
				if(Trim(document.getElementById(txtZip).value)!="")
				{
					strZip=Trim(document.getElementById(txtZip).value); 
					
					var s = new String(strZip);
					var bIsZipValid;
					bIsZipValid=true;
					
					var reUSZip = /^\d{5}([\-]\d{4})?$/;
					if(reUSZip.test(s)==false)
					{
						bIsZipValid=false;
					}


					for (var i=0; i < s.length; i++)
					{
						if ((s.charAt(i) < '0' || s.charAt(s) > '9') && s.charAt(i) != '-')
						{
							bIsZipValid=false;
							break;
						}
					}	
					
					if(bIsZipValid==false)
					{
						//strMsg = strMsg + "-Please enter valid zip code.\n";
						strMsg = strMsg + document.getElementById(hidIGWTB_JS_ALERT_4).value;
						
					} 
				}
			}					
			if(strMsg!="") 
			{
				/*  //Commented by Nitin due to duplicate alerts.
					//alert(strMsg);	*/
			}
			else
			{
				document.getElementById(hidIsPostBack).value=1;
				document.getElementById(hidProductName).value = document.getElementById(ddlProduct).options[document.getElementById(ddlProduct).selectedIndex].text;
				objForm.submit();
				return true;
			}
		}	
	}
	
	
	//Client side geocoding

	//Populate hidden fields
	//hidLatitude
	//hidLongitude
	//hidStartAddress
	//hidBusinessUnitID
	//hidLocationType
	//hidCountry
	
	if(strMsg!="") 
	{
		alert(strMsg);
	}
	else
	{
		//bRetVal=true;
		
		showAddress();
	}
	
	if(bRetVal==true)
	{
		objForm.submit();
	}
	else
	{
		return false;	
	}
	
}


//////////////////////////////////



// ====== Geocoding ======
function showAddress() 
{
    var objForm = document.forms[0];
	var geo;
	var reasons=[];
	// ====== Create a Client Geocoder ======
//	geo = new GClientGeocoder(); 
    geo = new google.maps.Geocoder(); //version 3.0

	// ====== Array for decoding the failure codes ======
	//reasons[G_GEO_SUCCESS]            = "Success";
	//reasons[G_GEO_MISSING_ADDRESS]    = "Missing Address: The address was either missing or had no value.";
	//reasons[G_GEO_UNKNOWN_ADDRESS]    = "Unknown Address:  No corresponding geographic location could be found for the specified address.";
	//reasons[G_GEO_UNAVAILABLE_ADDRESS]= "Unavailable Address:  The geocode for the given address cannot be returned due to legal or contractual reasons.";
	//reasons[G_GEO_BAD_KEY]            = "Bad Key: The API key is either invalid or does not match the domain for which it was given";
	//reasons[G_GEO_TOO_MANY_QUERIES]   = "Too Many Queries: The daily geocoding quota for this site has been exceeded.";
	//reasons[G_GEO_SERVER_ERROR]       = "Server error: The geocoding request could not be successfully processed.";

//    reasons[G_GEO_SUCCESS]            = document.getElementById(hidIGWTB_JS_ALERT_7).value;
//	reasons[G_GEO_MISSING_ADDRESS]    = document.getElementById(hidIGWTB_JS_ALERT_8).value;
//	reasons[G_GEO_UNKNOWN_ADDRESS]    = document.getElementById(hidIGWTB_JS_ALERT_9).value;
//	reasons[G_GEO_UNAVAILABLE_ADDRESS]= document.getElementById(hidIGWTB_JS_ALERT_10).value;
//	reasons[G_GEO_BAD_KEY]            = document.getElementById(hidIGWTB_JS_ALERT_11).value;
//	reasons[G_GEO_TOO_MANY_QUERIES]   = document.getElementById(hidIGWTB_JS_ALERT_12).value;
//	reasons[G_GEO_SERVER_ERROR]       = document.getElementById(hidIGWTB_JS_ALERT_13).value;
//Version 3.0
    reasons[google.maps.GeocoderStatus.OK]                 = document.getElementById(hidIGWTB_JS_ALERT_7).value;
    reasons[google.maps.GeocoderStatus.ZERO_RESULTS]       = document.getElementById(hidIGWTB_JS_ALERT_9).value;
    reasons[google.maps.GeocoderStatus.OVER_QUERY_LIMIT]   = document.getElementById(hidIGWTB_JS_ALERT_12).value;
    reasons[google.maps.GeocoderStatus.REQUEST_DENIED]     = document.getElementById(hidIGWTB_JS_ALERT_13).value;
    reasons[google.maps.GeocoderStatus.INVALID_REQUEST]    = document.getElementById(hidIGWTB_JS_ALERT_8).value;
    reasons[google.maps.GeocoderStatus.UNKNOWN_ERROR]      = document.getElementById(hidIGWTB_JS_ALERT_13).value;

	var search;

	search = Trim(document.getElementById(txtCity).value);
	if(search!="")
	{
	    search = search + ",";
	}
	
	search = search + document.getElementById(ddlState).value;
	if(document.getElementById(ddlState).value!="")
	{
	    search = search + ",";
	}
	
	search = search + Trim(document.getElementById(txtZip).value);
	if(Trim(document.getElementById(txtZip).value)!="")
	{
	    search = search + ",";
	}
	search = search + document.getElementById(hidCountry).value;
	
	//alert(search);	
   
	// ====== Perform the Geocoding ======        
	//geo.getLocations(search, function (result)
	  geo.geocode({'address': search }, function (results, status)
	  {
		//map.clearOverlays(); 
		//if (result.Status.code == G_GEO_SUCCESS) 
		if (status == google.maps.GeocoderStatus.OK) //ver3.0
		{
		
		// ===== If there was more than one result, "ask did you mean" on them all =====
		
		    //if (result.Placemark.length > 1) 
		    if (results.length > 1) //Ver 3.0
		    {
		        var strMessage=""; 
			    //document.getElementById("message").innerHTML = "Did you mean:";
			    // Loop through the results
			    strMessage = "We were not able to find exact matching starting location '"+ search +"' that you specified in your search criteria.";
			    strMessage = strMessage +"\n\nFollowing are some nearest matching addresses -";
			    //for (var i=0; i<result.Placemark.length; i++) 
			    for (var i=0; i<results.length; i++) //Version 3.0
			    {
				    //var p = result.Placemark[i].Point.coordinates;
				    //document.getElementById("message").innerHTML += "<br>"+(i+1)+": <a href='javascript:place(" +p[1]+","+p[0]+",\""+ result.Placemark[i].address+"\")'>"+ result.Placemark[i].address+"</a>";
    				
			    //strMessage = strMessage +"\n"+ (i+1) +". "+ result.Placemark[i].address;	
			    strMessage = strMessage +"\n"+ (i+1) +". "+ results[i].formatted_address; //Version 3.0
			    }
    								
			    strMessage = strMessage +"\n\nPlease review your starting location information and try again.";							
			    alert(strMessage);
		    }
		    // ===== If there was a single marker =====
		    else 
		    {
			    //document.getElementById("message").innerHTML = "";
			    //var p = result.Placemark[0].Point.coordinates; //Version 2.0
			    var p = results[0].geometry.location; //Version 3.0
			    var CityFound="";
			    var StateFound="";
			    var ZipFound="";
			    var CountryFound="";
    		
    		
			    //Extract the address details
			    for( var i=0;results[0].address_components.length>i; i++)
				{
				    switch(results[0].address_components[i].types[0])
				    {
				     case "locality":
				        CityFound = results[0].address_components[i].long_name;
				        break;
				     case "administrative_area_level_1":
				        StateFound = results[0].address_components[i].short_name;
				        break;
				     case "postal_code":
				        ZipFound = results[0].address_components[i].long_name;
				        break;
				     case "country":
				        CountryFound = results[0].address_components[i].short_name;
				        break;
				    }
				 }  
//			    try
//			    {
//				    CityFound = result.Placemark[0].AddressDetails.Country.AdministrativeArea.Locality.LocalityName;
//			    }
//			    catch(err){}
//    			
//			    try
//			    {
//				    if(CityFound=="")
//				    {
//					    CityFound = result.Placemark[0].AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName
//				    }
//			    }
//			    catch(err){}
//    			
//			    try
//			    {
//				    StateFound = result.Placemark[0].AddressDetails.Country.AdministrativeArea.AdministrativeAreaName;
//			    }
//			    catch(err){}
//    			
//			    try
//			    {
//				    ZipFound = result.Placemark[0].AddressDetails.Country.AdministrativeArea.Locality.PostalCode.PostalCodeNumber;
//			    }
//			    catch(err){}
//    			
//			    try
//			    {
//				    if(ZipFound=="")
//				    {
//					    ZipFound = result.Placemark[0].AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.PostalCode.PostalCodeNumber;
//				    }
//			    }
//			    catch(err){}
//    			
//			    try
//			    {
//				    CountryFound = result.Placemark[0].AddressDetails.Country.CountryNameCode;
//			    }
//			    catch(err){}
    			
			    if(Trim(document.getElementById(txtZip).value)!="") 
			    {
				    //if( result.Placemark[0].AddressDetails.Accuracy==5)
				    if( results[0].address_components.length>=4)
				    {
				    //starting location is found, find distributors based on this starting address
//					    document.getElementById(hidLatitude).value = p[1];
//					    document.getElementById(hidLongitude).value = p[0];
                        document.getElementById(hidLatitude).value = p.lat();  //Version 3.0
					    document.getElementById(hidLongitude).value = p.lng();
					    document.getElementById(hidStartAddress).value = search;
					    document.getElementById(hidIsPostBack).value=1;
					    objForm.submit();
				    }
				    else
				    {
					    alert("We were not able to find the starting location '"+ search +"' that you specified in your search criteria.\nPlease review your starting location information and try again.");
				    }
			    }
			    else
			    {
				    //check if address is matching
				    if(fnIsFoundAddrMatching(CityFound,StateFound,ZipFound,CountryFound)==true)
				    {
					    //starting location is found, find distributors based on this starting address
//					    document.getElementById(hidLatitude).value = p[1];
//					    document.getElementById(hidLongitude).value = p[0];
                        document.getElementById(hidLatitude).value = p.lat();  //Version 3.0
					    document.getElementById(hidLongitude).value = p.lng();
					    document.getElementById(hidStartAddress).value = search;
					    document.getElementById(hidIsPostBack).value=1;
					    objForm.submit();
				    }
				    else
				    {
					    alert("We were not able to find the starting location '"+ search +"' that you specified in your search criteria.\nPlease review your starting location information and try again.");
    				
				    }							
    			
			    }
    			
		    }
		}
		// ====== Decode the error status ======
		else 
		{
			var reason="Code "+result.Status.code;
			if (reasons[result.Status.code]) 
				{
					reason = reasons[result.Status.code];
				} 
				alert('Could not find "'+search+ '" ' + reason);
		}
	}
	);	
}
				
function fnIsFoundAddrMatching(CityFound,StateFound,ZipFound,CountryFound)
{
    var bRetVal;
	if(document.getElementById(txtZip).value!="")
	{
		if(ZipFound==Trim(document.getElementById(txtZip).value) && CountryFound=="US")
		{
			bRetVal = true;
		}
		else
		{
			bRetVal = false;
		}
	}
	else
	{
		//City
		if(CityFound.toLowerCase() == Trim(document.getElementById(txtCity).value.toLowerCase()) && StateFound.toLowerCase() == Trim(document.getElementById(ddlState).value.toLowerCase()) && CountryFound=="US")
		{
			bRetVal = true;
		}
		else
		{
			bRetVal = false;
		}	
	}
	return bRetVal;
}

function NewSearchClick()
{
    __CMS_PostbackFormBeenReset = true;
    document.getElementById(hidIsPostBack).value="";
    document.forms[0].submit();
    return true;
}