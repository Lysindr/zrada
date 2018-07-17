var answers = ['ЗРАДА!', 'ПЕРЕМОГА!'];


var form = $('#form');
var input = $('#question-input');
var message = $('#message');


form.submit(function(e) {
	e.preventDefault();

	if (input.val() != "" && !message.hasClass('message-box--active')) {
		//do something
		message.addClass('message-box--active');
		message.text(answers[Math.floor(Math.random() * answers.length)]);

		// if ПЕРЕМОГА - гимн украины или гифка с поднятием флага :D
	} else {
		return false;
	}
});


input.on('input', function(e) {
	// console.log(e.originalEvent.data); 
	// $('body').append('<div class="letter">' + e.originalEvent.data + '</div>');


	if ($(this).val() == "" && message.hasClass('message-box--active')) {
		message.removeClass('message-box--active');
		message.text('');
	}
});