$(document).ready(function() {
	$(".scroll").on("click", function(e) {
		var activeHash = "";
		e.preventDefault();
		if (activeHash != this.hash) {
			var destination = $(this.hash).offset().top;
		}	
		$('body').animate({ scrollTop: destination }, 1500);
		activeHash = this.hash;
	})
});