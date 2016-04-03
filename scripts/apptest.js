console.log("hi");
$posY=0;
$vy = 1;
var mousedownID = -1;
$(document).ready(function() {
	$('#tom').mousedown(function() {
	  // $('#dot').addClass("pinball");
	  // $posY += $vy
	  // $('#dot').css({bottom:$posY + 'px'});
	  if(mousedownID==-1) { //Prevent multimple loops!
			mousedownID = setInterval(whilemousedown, 10 /*execute every 100ms*/);
	  }
	});
	$('#tom').mouseup(function() {
	 //  $('#dot').removeClass("pinball");
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
		if ($posY <= 0) {
			$vy += gravity;
		}
	  console.log(mousedownID);
	  $posY += $vy
	  $('#dot').css({bottom:$posY + 'px'});
	}
});

// var G = 9.8;
// var botY = 0;
// ball.y += vy;
var gravity = 0.05;


