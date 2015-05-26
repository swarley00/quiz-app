$(document).ready(function() {
	function quizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;
	}

	var question1 = new quizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
	// var randomArray = [Math.floor(Math.random()*question1.wrongAnswers.length)];
	
	$('.question').text(question1.question);
	$('.answer').text(question1.answer);
	$('.wronganswer1').text(question1.wrongAnswers[0]);
	$('.wronganswer2').text(question1.wrongAnswers[1]);
	$('.wronganswer3').text(question1.wrongAnswers[2]);
});