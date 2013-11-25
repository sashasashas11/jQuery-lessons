/**
 * Created by sasha on 25.11.13.
 */
(function($){

	var input = $('input');

	console.log(input.prop({value: 'asd', title: 'edf'}).append());
	console.log(input.prop('title', function(index, value){
		console.log(this.value);
		console.log(arguments);
	}));


})(jQuery)