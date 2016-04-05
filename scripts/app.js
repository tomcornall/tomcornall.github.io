// Copyright Tom Cornall 2016c 24.2352.23.342.3
$(document).ready(function() {

	// CLICK / ONE
	$('a').click(function() {
		$(this).css('color', '#F58B57');
	});

	// -----     RANDOMIZER      ----- 
	// -----     NVD credit      ----- 
	// ----- Phil Emsley, c2016  -----
	// -----    12.24.1.23.1     -----
	$(".click-"+Math.floor((Math.random() * 20) + 1).toString()).attr("href", "1.html");

	// Resizer and width/height decider, only if smaller than 600 (max size)
	$(window).resize(function() {
	  if ($(window).width() < $(window).height() && $(window).width() < 600) {
	  	$("#wrap").addClass("width-is-the-decider");
	  	$("#wrap").removeClass("height-is-the-decider");
	  } else if($(window).height() < 600) {
	  	$("#wrap").addClass("height-is-the-decider");
	  	$("#wrap").removeClass("width-is-the-decider");
	  } else {
	  	$("#wrap").removeClass("width-is-the-decider");
	  	$("#wrap").removeClass("height-is-the-decider");
	  }
	});
	// Trigger Resizer
	$(window).resize();

});