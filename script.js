$(function() {
	var img = new Image();
	img.onload = function() {
	  $("#canvas-mask .handle").width = this.width;

	}
	img.src = 'images/canvas-mask.jpg';

	$("#floating-menu a").click(function() {
		$("#floating-menu a").removeClass("chosen");
		$(this).addClass("chosen");
	});
	
	$("#canvas-mask .handle .page .body a").click(function() {
		if ($(this).hasClass("chosen")){
			$(this).removeClass("chosen");
		} else {
			$(this).addClass("chosen");
		}

	});
	
	var canvasMask = new Dragdealer('canvas-mask', {
		x: 0.5,
		// Start in the bottom-left corner
		y: 1,
		vertical: false,
		horizontal: true,
		speed: 0.05,
		loose: true,
		slide:true
	  });

	  // Bind event on the wrapper element to prevent it when a drag has been made
	  // between mousedown and mouseup (by stopping propagation from handle)
	  $('#canvas-mask').on('click', '.menu a', function(e) {
		e.preventDefault();
		var anchor = $(e.currentTarget);
		canvasMask.setValue(anchor.data('x'), anchor.data('y'));
	});
	
	canvasMask.setValue(0.550, 1);
  


})


