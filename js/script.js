$(document).ready(function() {
	function quizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;
	}

	var question1 = new quizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
	// var question2 = new quizItem ('?', '', ['', '', '']);
	// var question3 = new quizItem ('?', '', ['', '', '']);
	// var question4 = new quizItem ('?', '', ['', '', '']);
	// var question5 = new quizItem ('?', '', ['', '', '']);
	// var randomArray = [Math.floor(Math.random()*question1.wrongAnswers.length)];
	
	$('.question').text(question1.question);
	$('.answer').text(question1.answer);
	$('.wronganswer1').text(question1.wrongAnswers[0]);
	$('.wronganswer2').text(question1.wrongAnswers[1]);
	$('.wronganswer3').text(question1.wrongAnswers[2]);

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

	// $(#submitBtn).click(function() {
	// 	if () {

	// 	}
	// 	else {
			
	// 	} 
	// })
});