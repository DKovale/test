 
$(document).ready(function() { 

$(".lvl1").click(function () {
	if ($(this).find('.subm:first').is(":hidden")){
		$('.subm').hide();
        $(this).find('.subm:first').slideDown(300); 
		} else {
	$('.subm').hide();}	   
			});

$(".lvl2").hover(function () {
            $(this).find('.subm2:first').toggle(100);
			});

$(".item1").click(function () {
 if ($(this).find('.alist1:first').is(":hidden")) {
            $(this).find('.alist1:first').slideDown(300);
			 $(this).find(".plus:first").rotate(
				{animateTo:45,
				  duration:500});
			 } else {
$(this).find('.alist1:first').hide();
	 $(this).find(".plus:first").rotate(
				{animateTo:0,
				  duration:500})}});						
$(window).resize(function () {
if($(window).width()>700) {	
	/*$('body').append("<div>W= "+$(window).width()+"<div>"); */
}
});
}); 