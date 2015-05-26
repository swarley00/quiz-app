$(document).ready(function() {
	function QuizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;
	}

	var question1 = new QuizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
	var question2 = new QuizItem ('What comic did Barry first appear in?', 'Showcase #4', ['Flash Comics #1', 'Superman #199', 'Flash #167']);
	var question3 = new QuizItem ("Who is Barry's archenemy?", 'Reverse-Flash', ['Captain Cold', 'The Joker', 'Sinestro']);
	var question4 = new QuizItem ('In what storyline does Barry die?', 'Crisis on Infinite Earths', ['Final Crisis', 'Flash: Rebirth', 'Flashpoint']);
	var question5 = new QuizItem ('In what publication year did Barry return to the DCU?', '2008', ['1976', '2004', '2012']);
	// var randomArray = [Math.floor(Math.random()*question1.wrongAnswers.length)];
	
	$('.question').text(question1.question);
	$('.answer').text(question1.answer);
	$('.wronganswer1').text(question1.wrongAnswers[0]);
	$('.wronganswer2').text(question1.wrongAnswers[1]);
	$('.wronganswer3').text(question1.wrongAnswers[2]);

	$('li').click(function() {
		$(this).closest('li').find('p').toggleClass('selected');
		console.log(this);
	});

	$('#submitBtn').click(function() {
		if ($('.selected').is('.answer')) {
			console.log('correct');
		}
		else {
			console.log('incorrect');
		} 
	});

	// $('.question').text(question2.question);
	// $('.answer').text(question2.answer);
	// $('.wronganswer1').text(question2.wrongAnswers[0]);
	// $('.wronganswer2').text(question2.wrongAnswers[1]);
	// $('.wronganswer3').text(question2.wrongAnswers[2]);

	// $('.question').text(question3.question);
	// $('.answer').text(question3.answer);
	// $('.wronganswer1').text(question3.wrongAnswers[0]);
	// $('.wronganswer2').text(question3.wrongAnswers[1]);
	// $('.wronganswer3').text(question3.wrongAnswers[2]);

	// $('.question').text(question4.question);
	// $('.answer').text(question4.answer);
	// $('.wronganswer1').text(question4.wrongAnswers[0]);
	// $('.wronganswer2').text(question4.wrongAnswers[1]);
	// $('.wronganswer3').text(question4.wrongAnswers[2]);

	// $('.question').text(question5.question);
	// $('.answer').text(question5.answer);
	// $('.wronganswer1').text(question5.wrongAnswers[0]);
	// $('.wronganswer2').text(question5.wrongAnswers[1]);
	// $('.wronganswer3').text(question5.wrongAnswers[2]);
});