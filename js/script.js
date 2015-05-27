$(document).ready(function() {
	Question1();

	$('li').click(function() {
		$(this).closest('li').find('p').toggleClass('selected');
	});	

	function QuizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;
	}

	function Question1 () {
		var question1 = new QuizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
	
		$('.question').text(question1.question);
		$('.answer').text(question1.answer);
		$('.wronganswer1').text(question1.wrongAnswers[0]);
		$('.wronganswer2').text(question1.wrongAnswers[1]);
		$('.wronganswer3').text(question1.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if ($('.selected').is('.answer')) {
				$('.overlay-container').show();
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(2)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question2();
				});
			}
			else {
				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(2)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question2();
				});
			} 
		});
	}

	function Question2 () {
		if ($('p').is('.selected')) {
			$('p').toggleClass('.selected');
		}

		var question2 = new QuizItem ('What comic did Barry first appear in?', 'Showcase #4', ['Flash Comics #1', 'Superman #199', 'Flash #167']);

		$('.question').text(question2.question);
		$('.answer').text(question2.answer);
		$('.wronganswer1').text(question2.wrongAnswers[0]);
		$('.wronganswer2').text(question2.wrongAnswers[1]);
		$('.wronganswer3').text(question2.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if ($('.selected').is('.answer')) {
				$('.overlay-container').show();
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(3)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question3();
				});
			}
			else {
				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(3)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question3();
				});
			} 
		});
	}

	function Question3 () {
		var question3 = new QuizItem ("Who is Barry's archenemy?", 'Reverse-Flash', ['Captain Cold', 'Joker', 'Sinestro']);

		$('.question').text(question3.question);
		$('.answer').text(question3.answer);
		$('.wronganswer1').text(question3.wrongAnswers[0]);
		$('.wronganswer2').text(question3.wrongAnswers[1]);
		$('.wronganswer3').text(question3.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if ($('.selected').is('.answer')) {
				$('.overlay-container').show();
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(4)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question4();
				});
			}
			else {
				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(4)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question4();
				});
			} 
		});
	}

	function Question4 () {
		var question4 = new QuizItem ('In what storyline does Barry die?', 'Crisis on Infinite Earths', ['Final Crisis', 'Flash: Rebirth', 'Flashpoint']);

		$('.question').text(question4.question);
		$('.answer').text(question4.answer);
		$('.wronganswer1').text(question4.wrongAnswers[0]);
		$('.wronganswer2').text(question4.wrongAnswers[1]);
		$('.wronganswer3').text(question4.wrongAnswers[2]);	

		$('#submitBtn').click(function() {
			if ($('.selected').is('.answer')) {
				$('.overlay-container').show();
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question5();
				});
			}
			else {
				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					Question5();
				});
			} 
		});
	}

	function Question5 () {
		var question5 = new QuizItem ('In what publication year did Barry return to the DCU?', '2008', ['1976', '2004', '2012']);

		$('.question').text(question5.question);
		$('.answer').text(question5.answer);
		$('.wronganswer1').text(question5.wrongAnswers[0]);
		$('.wronganswer2').text(question5.wrongAnswers[1]);
		$('.wronganswer3').text(question5.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if ($('.selected').is('.answer')) {
				$('.overlay-container').show();
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
				});
			}
			else {
				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
				});
			} 
		});
	}
});

	// var randomArray = [Math.floor(Math.random()*question1.wrongAnswers.length)];

	// function PopUp (image, headline, bodycopy) {
	// 	this.image = image;
	// 	this.headline = headline;
	// 	this.bodycopy = bodycopy;
	// } 

	// var popup1 = new PopUp ();