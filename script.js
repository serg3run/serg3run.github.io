$(function(){
	$('.toggles button').click(function(){

		var get_id=this.id;
		var get_current=$('.write.'+get_id);

		$('.write').not(get_current).hide(500);
		get_current.show(500);
	});
	$('#Show').click(function(){
		$('.write').show(300);
	});
});