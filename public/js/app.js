var socket = io();

socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

socket.on('message', function (message) {
	console.log('New message: ');
	console.log(message.text);
});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault(); //This handles the form submission on our own

	var $message = $form.find('input[name=message]');
	
	socket.emit('message', {
		text: $message.val() // Finds the input named message & .val finds the value entered
	});

	$message.val('');
});