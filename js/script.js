$(document).ready(function () {
	// alert
	$('#click-btn').click(function(){
		alert("Welcome");
	});

	// hide
	$('#hide-btn').click(function(){
		$('#text').hide("slow");
	});

	// show
	$('#show-btn').click(function(){
		$('#text').show("slow");
	});

	// toggle
	$('#toggle-btn').click(function(){
		$('#text').toggle("slow");
	});

	// fadeout
	$('#fadeout-btn').click(function(){
		$('#text').fadeOut("slow");
	});

	// fadein
	$('#fadein-btn').click(function(){
		$('#text').fadeIn("slow");
	});

	// fade toggle
	$('#fadetoggle-btn').click(function(){
		$('#text').fadeToggle("slow");
	});
	// draggable
	$( function() {
    $( "#draggable" ).draggable();
  } );
	// Resizable
	$( function() {
    $( "#resizable" ).resizable();
  } );

	
});