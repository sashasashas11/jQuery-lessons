/**
 * Created by sasha on 25.11.13.
 */
(function($){

	console.log($('script') instanceof Object);
	$.fn.asaa = function(){
		console.log(this);
		return this;
	};
	$('script').asaa().append().asaa();


})(jQuery)