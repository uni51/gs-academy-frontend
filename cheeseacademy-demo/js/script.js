(function(){
	
	if ( 'ontouchstart' in document.documentElement ) {
			alert("タッチがある！");
	}
	
	$(".btn-mobileMenu").on("click",function(){
		$(".nav").slideToggle();
	});
	
	
	
})();
