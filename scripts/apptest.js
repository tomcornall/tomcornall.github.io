
console.log("hi");
$posY=0;
$vy = 0.01;
$trigger = false;
var mousedownID = -1;
$(document).ready(function() {
	$('#tom').mousedown(function() {

	  if(mousedownID==-1) { //Prevent multimple loops!
			mousedownID = setInterval(whilemousedown, 10 /*execute every 100ms*/);
	  }
	});
	$('#tom').mouseup(function() {

		if(mousedownID!=-1) {  //Only stop if exists
			clearInterval(mousedownID);
			mousedownID=-1;
		}
	});
	$('#tom').mouseout(function() {
		if(mousedownID!=-1) {  //Only stop if exists
			clearInterval(mousedownID);
			mousedownID=-1;
		}
	  // $('#dot').removeClass("pinball");
	});

	function whilemousedown() {
		if ($vy > 2) {
			$trigger = true;
	  	$vy -= gravity;
	  }
	  if ($trigger = false) {
	  	$vy += gravity;
	  }

		console.log($vy);
	  $posY += $vy;

	  $('#dot').css({bottom:$posY + 'px'});
	}
});

var gravity = 0.035;

