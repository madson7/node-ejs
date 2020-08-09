//breakdown the labels into individual characters for animation
$("label").each(function(){
	var sop = '<span class="ch">';
	var scl = '</span>'; 
	$(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
	$(".ch:contains(' ')").html("&nbsp;");
})

//Variable for Time Delay,  Set below
var d;

$(".top input").focus(function(){
	//calculate movement for .ch = half of input height
	var tm = $(this).outerHeight()/2 *-1 + "px";
	//label = next sibling of input
	//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;//delay
		$(this).delay(d).animate({top: tm}, 100, 'easeInBounce');
	})
})
$(".top input").blur(function(){
	//animate the label down if content of the input is empty
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
			d = i*50;
			$(this).delay(d).animate({top: 0}, 100, 'easeInBounce');
		})
	}
})

var d;
$(".left input").focus(function(){
	//calculate movement for .ch = half of input height
	var tm = $(".left label").width()/4 *-1 + "px";
   //var width = $(".left label").width()*1.2;
   //$(this).animate({left: width}, 100, 'easeInBounce');
	//label = next sibling of input
	//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;//delay
		$(this).delay(d).animate({left: tm}, 100, 'easeInBounce');
	})
})
$(".left input").blur(function(){
	//animate the label down if content of the input is empty
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
			d = i*50;
			$(this).delay(d).animate({left: 0}, 100, 'easeInBounce');
         $(".left input").animate({left: 0}, 100, 'easeInBounce');

		})
	}
})

var d;
$(".bottom input").focus(function(){
	//calculate movement for .ch = half of input height
	var tm = $(this).outerHeight()/2 *-1 + "px";
	//label = next sibling of input
	//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;//delay
		$(this).delay(d).animate({bottom: tm}, 100, 'easeInBounce');
	})
})
$(".bottom input").blur(function(){
	//animate the label down if content of the input is empty
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
			d = i*50;
			$(this).delay(d).animate({bottom: 0}, 100, 'easeInBounce');
		})
	}
})

var d;
$(".right input").focus(function(){
	//calculate movement for .ch = half of input height
	var tm = (($(this).width() *-1) + 8) + "px";
	//label = next sibling of input
	//to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;//delay
		$(this).delay(d).animate({right: tm}, 100, 'easeInBounce');
    $(".right input").css("width","90%");
	})
})
$(".right input").blur(function(){
	//animate the label down if content of the input is empty
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
			d = i*50;
			$(this).delay(d).animate({right: 0}, 100, 'easeInBounce');
        $(".right input").css("width","100%");

		})
	}
})