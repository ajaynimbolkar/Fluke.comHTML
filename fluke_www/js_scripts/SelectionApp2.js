// these vars are used by any data set
var arySelected = new Array();
var aryAutoSelected = new Array();
var aryDeSelected = new Array();
var aryDisplayedProds = new Array();
var aryDisplayedAttrs = new Array();
var aRowsOff = new Array();
var aColsOff = new Array();
var aryCmdImages = new Array();
var strSpacer = '../../../fluke_www/images/spacer-2.gif';
var strImgPath = 'http://www.fluke.com/fluke_www/images/Web2_0/SelectionApp/';
var arySpecials = new Array('COL','PROD','PN'); // part of product column manipulation (Comparator)

var ob; //temp object
var over = false; //set to true when your mouse is over a drag/drop bar
var msgDivID = ''; //this gets set to the Name of the Div drag/drop bar you are mousing over
var mouseX=0; //need to set default value
var mouseY=0; //need to set default value
var X = 0; //event.offsetX - sets how many px you are from the corner if the drag/drop div
var Y = 0; //event.offsetY - sets how many px you are from the corner if the drag/drop div

var isIE = (document.all) ? true: false; //is Internet Explorer
var sRowOn = (isIE) ? 'block': 'table-row';

// functions called by user interaction:

function ClickedCell(curID) { // the primary select function
  
  // Is this currently Selected?
  if (ExistsInArray(curID,arySelected)) {
    // it is, subtract from arySelected, and do algorythm
    RemoveFromArray(curID,arySelected);
    if (arySelected.length == 0) {
      ResetArrays();
    }
    else {
      DoAlgorythm();
    }
  }
  // If it is not in aryAutoSelected or aryDeSelected then select it
  else if ((! ExistsInArray(curID,aryAutoSelected)) && (! ExistsInArray(curID,aryDeSelected))) {
    arySelected.push(curID);
    DoAlgorythm();
  }
}

function LaunchCompare() {
  // the Compare button
  var i,j=0;
  var wid = document.forms[0].qc;
  var aryQC = new Array();
  var bUseQC = false;
  
  document.forms[0].useQuick.value = 0;
  document.forms[0].selAtts.value = '';
  
  if (aryDisplayedProds.length == 1) {
    aryQC = CopyArray(aryDisplayedProds);
  }
  else {
    // check if they have clicked anything in qc
    for (i=0;i<wid.length;i++) {
      if (wid[i].checked) {
        j++;
        aryQC.push(wid[i].value);
        bUseQC = true;
      }
    }
    
    if (j>0) {
      if (j > 4) {
		openMsg('msg2', 255);
        //openMsg('msg2',375);
        //alert('Please check 4 or fewer products for Quick Compare');
        return;
      }
    }
    else if ((aryDisplayedProds.length > 4) || (aryDisplayedProds.length == 0)) {
	    openMsg('msg2', 255);
      //openMsg('msg1',375);
      //alert('Comparison is limited to 4 or fewer products. Please continue selecting attributes.');
      return;
    }
    else {
      aryQC = CopyArray(aryDisplayedProds);
    }
  }
  
  if (bUseQC) { document.forms[0].useQuick.value = 1;}
  
  document.forms[0].selAtts.value = arySelected.join(', ');
  document.forms[0].selProds.value = aryQC.join(', ');
  document.forms[0].submit();
}

function LaunchROI () {
  alert('in LaunchROI, does not do anything yet');
}

function LaunchPDF (path) {
  //alert('in LaunchPDF, does not do anything yet');
  document.forms[0].pdfAtts.value = aryAllRows.join('|');  //// = aRowsOff.join('|');
  document.forms[0].pdfProds.value = aryDProds.join('|');
  document.forms[0].target = '_blank';
  //document.comparator.action = 'http://www.dev.fluke.com/test/ShowForm.asp';
  document.forms[0].action = '/fluke_www/Templates/ProductPages/PDFExport/pdfcreator.aspx'; //// 'PDFExport/pdfcreator.aspx';
  document.forms[0].submit();
  document.forms[0].target = '_self';
  document.forms[0].action = '';
}

function LaunchNew () {
  document.forms[0].comAtts.value = '';
  document.forms[0].comProds.value = '';
  document.forms[0].submit();
}

function LaunchRefine () {
  document.forms[0].submit();
}
  
function ToggleAttrGrp(curID) {
  // clicked the down or right arrow associated with Attribute Categories
  var wid = document.getElementById(curID+'r');
  if (wid.style.display == 'none') {
    wid.style.display = 'block';
    document.getElementById(curID+'i').src = strImgPath + '/Arrow_down.gif';
    document.getElementById(curID+'e').style.display = 'block';
  }
  else {
    wid.style.display = 'none';
    document.getElementById(curID+'i').src = strImgPath + '/Arrow_right.gif';
    document.getElementById(curID+'e').style.display = 'none';
  }
}

function ResetArrays() {
  // the Reset button
  ZeroArrays();
  arySelected.length = 0;
  ResetAll();
}

function HideRow(r){
  document.getElementById('ROW'+r).style.display = 'none';
  aRowsOff.push(r);
  
  if (aRowsOff.length == 1) {
    document.getElementById('RowBack').className = 'BBackActive2_0';
    document.getElementById('ARBack').className = 'BBackActive2_0';
  }
}

function ShowLastRow(){
  var r = aRowsOff.pop();
  if (! r) {return;}
  
  document.getElementById('ROW'+r).style.display = sRowOn;
  
  if (aRowsOff.length == 0) {
    document.getElementById('RowBack').className = 'BBack2_0';
    document.getElementById('ARBack').className = 'BBack2_0';
  }
}

function ShowAllRow() {
  while (aRowsOff.length) {
    ShowLastRow(); }
}

function HideCol(c) {
  var i;
  // turn off cells in the field rows
  for (i=0; i < aryAllRows.length; i++) {
    document.getElementById('R' + aryAllRows[i] + 'C' + c).style.display = 'none';
  }
  // and the specials
  for (i=0; i < arySpecials.length; i++){
    document.getElementById(arySpecials[i] + c).style.display = 'none';
  }
  aColsOff.push(c);
  
  if (aColsOff.length == 1) {
    document.getElementById('ColBack').className = 'BBackActive2_0';
    document.getElementById('ACBack').className = 'BBackActive2_0';
  }
  
  RemoveFromArray(c,aryDProds);
  ProdMatch();
}

function ShowLastCol(){
  var i;
  var c = aColsOff.pop();
  if (! c) {return;}
  
  for (i=0; i < aryAllRows.length; i++){
    if (isIE) { document.getElementById('R' + aryAllRows[i] + 'C' + c).style.display = 'block';}
    else{ document.getElementById('R' + aryAllRows[i] + 'C' + c).style.display = 'table-cell';}
  }
  for (i=0; i < arySpecials.length; i++){
    if (isIE) { document.getElementById(arySpecials[i] + c).style.display = 'block';}
    else{ document.getElementById(arySpecials[i] + c).style.display = 'table-cell';}
  }
  aryDProds.push(c);
  
  if (aColsOff.length == 0) {
    document.getElementById('ColBack').className = 'BBack2_0';
    document.getElementById('ACBack').className = 'BBack2_0';
  }
  
  ProdMatch();
}

function ShowAllCol() {
  while (aColsOff.length) {
    ShowLastCol(); }
}

function closeMsg(divID) {
  over = false;
  msgDivID = '';
  document.getElementById(divID).style.visibility = 'hidden';
}

function openMsg(divID,offset) { 
  /* offset = 0 will make the DIV open to the left of the mouse
     offset = 510 will be right of the mouse
     offset = 255 centered on the mouse */
  if (isIE)
  {
  	var temp;
    ///alert(mouseY);
	if(mouseY <= 250)
	{  temp = 425;  }
	else if(mouseY > 250 && mouseY <= 450)
	{  temp = 140;  }
	else if(mouseY > 450  && mouseY <= 600)
	{  temp = 115;  }
	else
	{  temp = 240;  }
  	document.getElementById(divID).style.left = mouseX - (470 - offset);
	document.getElementById(divID).style.top = mouseY + temp;
  }
  else
  {
  	document.getElementById(divID).style.left = mouseX - (510 - offset);
  	document.getElementById(divID).style.top = mouseY;
  }
    document.getElementById(divID).style.visibility = 'visible';
}

function MD(e) {  // Mouse Down
  if ((over) && (msgDivID != '')) {
    ob = document.getElementById(msgDivID).style; //
    if (isIE){
      X = event.offsetX;
      Y = event.offsetY;
    }
    else {
      X = e.layerX;
      Y = e.layerY;
      return false;
    }
  }
}

function MM(e) {   // Mouse Move
  if (isIE) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (ob) {
      ob.pixelLeft = event.clientX-X + document.body.scrollLeft;
      ob.pixelTop = event.clientY-Y + document.body.scrollTop;
    }
    return false;
  }
  else {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if (ob) {
      ob.top = e.pageY-Y;
      ob.left = e.pageX-X;
    }
     return false;
  }
}

function MU() {  // Mouse Up
  ob = null;
} 

function CmdRoll(val,dir) {
//alert(val);
  document.getElementById(val).src = strImgPath + '/' + aryCmdImages[val][dir];
}

// --- end user interaction functions

// generic helper functions

function RemoveFromArray(Val,aryL) {
// operates directly on array reference passed in
  for (var i=0;i<aryL.length;i++) {
    if (Val == aryL[i]) {
      aryL.splice(i,1);
      break;
    }
  }
}

function ExistsInArray(Val,aryL) {
// returns T/F
  for (var i=0;i<aryL.length;i++) {
    if (Val == aryL[i]) {
      return true;
    }
  }
  return false;
}

function ExistsInBothArrays(ary1,ary2) {
// returns new array, intersection of args
  var i,j;
  var aryReturn = new Array();
  var aryTemp = CopyArray(ary2);
  
  for (i=0;i<ary1.length;i++) {
    for (j=0;j<aryTemp.length;j++) {
      if (ary1[i] == aryTemp[j]) {
        aryReturn[aryReturn.length] = ary1[i];
        RemoveFromArray(ary1[i],aryTemp);
        break;
      }
    }
  }
  return aryReturn;
}

function CopyArray(aryL) {
// returns new array whose contents match aryL
  var aryTemp = new Array();
  
  for (var i=0;i<aryL.length;i++) {
    aryTemp[aryTemp.length] = aryL[i];
  }
  return aryTemp;
}

function ArraySubtract(aryRemainder,aryOperator) {
// any vals within aryRemainder which match a val in aryOperator are removed
  for (var i=0;i<aryOperator.length;i++) {
    RemoveFromArray(aryOperator[i],aryRemainder)
  }
}

function AddArrays(aryAddedTo,aryOperator) {
// any vals in aryOperator which are not in aryAddedTo are added to aryAddedTo
  for (var i=0;i<aryOperator.length;i++) {
    if (! ExistsInArray(aryOperator[i],aryAddedTo)) {
      aryAddedTo[aryAddedTo.length] = aryOperator[i];
    }
  }
}

// --- end generic helper functions

// custom helper functions (used in this application, probably not in another)

function PreClick() {
  // this function might be called at load with in-line Javascript
  var i,j;
  
  for (i=0; i<document.forms[0].qc.length; i++) {
    for (j=0; j<aryPreClicked.length; j++) {
      if (document.forms[0].qc[i].value == aryPreClicked[j]) {
        document.forms[0].qc[i].checked = true;
      }
    }
  }
}

function ResetAll() {
  for (var i = 0;i<aryAttributes.length;i++) {
    document.getElementById(aryAttributes[i]).style.color = 'black';
    document.getElementById(aryAttributes[i]+'i').src = strImgPath + '/Unselected.gif';
    document.getElementById(aryAttributes[i]+'l').className = 'Glink';
  }
  ShowProdArray(aryProducts);
}

function ShowProdArray(aryL) {
// this function writes innerHTML to the page and therefore must be kept in sync with ASP code
  var m = 1;
  var strTemp = '<TABLE cellspacing=0 cellpadding=0 border=0 width="100%"><TR><TD></td><TD><img src="' + strSpacer + '" border="0" width="5" height="2"></td>';
  strTemp += '<TD></td><TD><img src="' + strSpacer + '" border="0" width="5" height="2"></td><TD></td></tr>';
  
  for (var i=0;i<aryL.length;i++) {
    // get the indice value (aryProducts) for this product, held in j
    for (var j=0;j<aryProducts.length;j++) {
      if (aryL[i] == aryProducts[j]) {break;}
    }
    
    // build the HTML
    if (m == 1) { strTemp += '<TR>'; }
    strTemp += '<TD valign="bottom"><Table cellspacing=0 cellpadding=0 border=0 class="ProdImgT"><TR><TD colspan=2><img src="'+ aryProdImg[j] +'" border=0></td></tr>';
    strTemp += '<TR><TD align="left" width="31%"><input type="checkbox" name="qc" value="'+ aryL[i] +'"></td>';
    strTemp += '<TD class="ProdImgN">'+ aryProdText[j] +'</td></tr></table></td>';
    m++;
    if (m == 4) {
      strTemp += '</tr><TR><td colspan=5><img src="' + strSpacer + '" border="0" width="1" height="5"></td></tr>';
      m = 1;
    }
    else { strTemp += '<TD></td>';}
  }
  
  // adjust for less then 3 products
  if (i < 3) {
    if (i == 1) {
      strTemp += '<td colspan=3><img src="' + strSpacer + '" border="0" width="155" height="5"></td>';
    }
    else {
      strTemp += '<td><img src="' + strSpacer + '" border="0" width="75" height="5"></td>';
    }
  }
    
  if (m != 1) { strTemp += '</tr>';}
  strTemp += '</table>';
  //alert(strTemp);
  //alert(document.getElementById('ProdTab').innerHTML);
  
  document.getElementById('ProdTab').innerHTML = strTemp;
  
}

function ZeroArrays() {
  aryDisplayedProds.length = 0;
  aryAutoSelected.length = 0;
  aryDisplayedAttrs.length = 0;
  aryDeSelected.length = 0;
}

function DoAlgorythm() {
// this is the primary "array manipulation" function, the brains of the selection process
// note: the ShowVals function is a debug alert mechanism (controlled by bDebug)
  var i;
  ZeroArrays();
  
  //	using the SelectedAttributes array calculate the DisplayedProducts array
  aryDisplayedProds = CopyArray(aryAttributes[arySelected[0]]);
  for (i=1;i<arySelected.length;i++) {
    aryDisplayedProds = ExistsInBothArrays(aryDisplayedProds,aryAttributes[arySelected[i]]);
  }
  
  //	using the DisplayedProducts array calculated the AutoSelected array
  aryAutoSelected = CopyArray(aryProducts[aryDisplayedProds[0]]);
  for (i=1;i<aryDisplayedProds.length;i++) {
    aryAutoSelected = ExistsInBothArrays(aryAutoSelected,aryProducts[aryDisplayedProds[i]]);
  }
  ArraySubtract(aryAutoSelected,arySelected);
  
  //	using the DisplayedProducts array calculated the DeSelected array
  //  this is attributes which aren't associated to any of the products
  //  first create a superset of attributes in our Displayed set
  aryDisplayedAttrs = CopyArray(aryProducts[aryDisplayedProds[0]]);
  for (i=1;i<aryDisplayedProds.length;i++) {
    AddArrays(aryDisplayedAttrs,aryProducts[aryDisplayedProds[i]]);
  }
  
  // now copy the first level attributes array to aryDeSelected & and subtract the superset
  aryDeSelected = CopyArray(aryAttributes);
  ArraySubtract(aryDeSelected,aryDisplayedAttrs);
  
  //	update the display, first show the DisplayedProducts array
  ShowProdArray(aryDisplayedProds);
  
  //  update the Attribute Values according to the Selected, AutoSelected, and DeSelected arrays
  for (i=0;i<aryAttributes.length;i++) {
    if (ExistsInArray(aryAttributes[i],arySelected)) {
      document.getElementById(aryAttributes[i]).style.color = 'black';
      document.getElementById(aryAttributes[i]+'i').src = strImgPath + '/Selected.gif';
      document.getElementById(aryAttributes[i]+'l').className = 'Glink';
    }
    else if (ExistsInArray(aryAttributes[i],aryAutoSelected)) {
      document.getElementById(aryAttributes[i]).style.color = 'black';
      document.getElementById(aryAttributes[i]+'i').src = strImgPath + '/Autoselected.gif';
      document.getElementById(aryAttributes[i]+'l').className = 'Dlink';
    }
    else if (ExistsInArray(aryAttributes[i],aryDeSelected)) {
      document.getElementById(aryAttributes[i]).style.color = '#777777';
      document.getElementById(aryAttributes[i]+'i').src = strImgPath + '/DeSelected.gif';
      document.getElementById(aryAttributes[i]+'l').className = 'Dlink';
    }
    else {
      document.getElementById(aryAttributes[i]).style.color = 'black';
      document.getElementById(aryAttributes[i]+'i').src = strImgPath + '/Unselected.gif';
      document.getElementById(aryAttributes[i]+'l').className = 'Glink';
    }
  }
}

function ProdMatch() {
  // this is called in Comparator to check which attribute values should display as matching
  var i;
  
  for (i=0;i<aryAllRows.length;i++) {
    RowMatch(aryAllRows[i]);
  }
}

function RowMatch(r) {
  var iFirst,i;
  var sClass = 'AttValMatch2_0';
  iFirst = aryDisplayedAttrs[r][aryDProds[0]];
  
  if (aryDProds.length == 1) { sClass = 'AttVal2_0';}
  
  for (i=1;i<aryDProds.length;i++) {
    if ((aryDisplayedAttrs[r][aryDProds[i]] == 0) || (iFirst != aryDisplayedAttrs[r][aryDProds[i]])) {
      sClass = 'AttVal2_0';
      break;
    }
  }

  for (i=0;i<aryDisplayedProds.length;i++) {
    //wid = eval('document.all.R'+r+'C'+aryDisplayedProds[i]);
    document.getElementById('R'+r+'C'+aryDisplayedProds[i]).className = sClass;
  }
}

//Listen for mouse events (must be placed after functions) 

if (! isIE) {
  document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP);
}
document.onmousedown = MD;
document.onmousemove = MM;
document.onmouseup = MU;
