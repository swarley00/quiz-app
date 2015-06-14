$(document).ready(function() {

	function QuizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;

		this.answers = [this.answer, this.wrongAnswers[0], this.wrongAnswers[1], this.wrongAnswers[2]];

		this.build = function () {
			$('.question').text(this.question);

			$('#1 .answer-text').text(this.answers[0]);
			$('#1 input').val(this.answers[0]);

			$('#2 .answer-text').text(this.answers[1]);
			$('#2 input').val(this.answers[1]);

			$('#3 .answer-text').text(this.answers[2]);
			$('#3 input').val(this.answers[2]);

			$('#4 .answer-text').text(this.answers[3]);
			$('#4 input').val(this.answers[3]);
		}

		this.check = function() {
			if($('input:checked').val() === answer) {
				console.log("right answer");
			} else {
				console.log("wrong answer");
			}
		}
	}

	var question1 = new QuizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
	var question2 = new QuizItem ('What comic did Barry first appear in?', 'Showcase #4', ['Flash Comics #1', 'Superman #199', 'Flash #167']);
	var question3 = new QuizItem ("Who is Barry's archenemy?", 'Professor Zoom', ['Captain Cold', 'Joker', 'Sinestro']);
	var question4 = new QuizItem ('In what storyline does Barry die?', 'Crisis on Infinite Earths', ['Final Crisis', 'Flash: Rebirth', 'Flashpoint']);
	var question5 = new QuizItem ('In what publication year did Barry return to the DCU?', '2008', ['1976', '2004', '2012']);

	var questions = [question1, question2, question3, question4, question5]
	var place = 0;

	questions[place].build();

	$('#submitBtn').click(function() {
		questions[place].check();
		place++;
		questions[place].build();
	});
});