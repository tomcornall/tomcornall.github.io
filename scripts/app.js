$(document).ready(function() {
	$(window).resize(function() {
		console.log("resize");
	  if ($(window).width() < $(window).height() && $(window).width() < 600) {
	  	$("#wrap").addClass("width-is-the-decider");
	  	$("#wrap").removeClass("height-is-the-decider");
			console.log("width decider");
	  } else if($(window).height() < 600) {
	  	$("#wrap").addClass("height-is-the-decider");
	  	$("#wrap").removeClass("width-is-the-decider");
	  } else {
	  	$("#wrap").removeClass("width-is-the-decider");
	  	$("#wrap").removeClass("height-is-the-decider");
	  }
	});
	$(window).resize();

	$('a').click(function() {
		$(this).css('color', '#F58B57');
	});
});