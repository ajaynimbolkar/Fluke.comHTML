// JavaScript Document



function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion1').on('hidden.bs.collapse', toggleChevron);
$('#accordion1').on('shown.bs.collapse', toggleChevron);




function hide1(){

  document.getElementById('form1').style.visibility = 'hidden';

}

function show1(){

  document.getElementById('form1').style.visibility = 'visible';


}



function hide2(){

 
  document.getElementById('form2').style.visibility = 'hidden';
 
}

function show2(){

  document.getElementById('form2').style.visibility = 'visible';

}


function hide3(){

  document.getElementById('form3').style.visibility = 'hidden';

}

function show3(){

  document.getElementById('form3').style.visibility = 'visible';

}


function hide4(){
 
  document.getElementById('form4').style.visibility = 'hidden';

}

function show4(){
 
  document.getElementById('form4').style.visibility = 'visible';

}

function hide5(){
 
  document.getElementById('form5').style.visibility = 'hidden';

}

function show5(){
 
  document.getElementById('form5').style.visibility = 'visible';

}


/*werkt wel maar blijft geclosed */
/*function closeFrame1() {
    document.getElementById("form1").style.display="none";
	
}

function closeFrame2() {
document.getElementById("form2").style.display="none";
}

function closeFrame3() {
document.getElementById("form3").style.display="none";
}
	
	function closeFrame4() {
document.getElementById("form4").style.display="none";
}

function closeFrame5() {
document.getElementById("form5").style.display="none";
}
*/

/* close werkt, open niet */

/*function removeIFrame() {
        var frame = document.getElementById("form1");
        frame.parentNode.removeChild(frame);
    }
	
	function openIFrame() {
        var frame = document.getElementById("form1");
        frame.parentNode.appendChild(frame);
    }*/