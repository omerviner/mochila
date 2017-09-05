$(function() {
	var img = new Image();
	img.onload = function() {
	  $("#canvas-mask .handle").width = this.width;

	}
	img.src = 'images/canvas-mask.jpg';


	
  var canvasMask = new Dragdealer('canvas-mask', {
    x: 0.545,
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
  


})


