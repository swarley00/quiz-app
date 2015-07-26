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
				$('h2').text("You're Correct!");
				modal();
			} else {
				console.log("wrong answer");
				$('h2').text('You Were So Close...');
				modal();
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

	var images = ['images/answer1.jpg', 'images/answer2.jpg', 'images/answer3.jpg', 'images/answer4.jpg', 'images/answer5.jpg'];

	var modalText1 = 'After graduating, Allen found work with the Central City Police Department as a police scientist, with a well-known habit for slowness and lateness. Working late in the lab one night, a rack of chemicals that he was working next to was struck by lightning, and Allen was doused in chemicals. Surprisingly unharmed, Allen cleaned up the mess and returned to work, but soon noticed that the world appeared to be moving much slower than normal. He soon realized that it was not the world that had slowed, but himself who had sped up.';
	var modalText2 = 'Barry Allen was created by Robert Kanigher, John Broome and Carmine Infantino. He made his first comic book appearance in October 1956 in the pages of Showcase #4.';
	var modalText3 = "Eobard Thawne was born in the 25th century, and eventually became the second Reverse Flash. His powers are similar to those of Barry Allen's (The Flash). However, while The Flash's powers come from his ability to tap into the Speed Force, Reverse Flash's come from his ability to tap into the negative speed force, which causes destruction. He also goes by the name Professor Zoom. He is best known for being the archenemy of Barry Allen, as well as murdering Barry's mother and his true love, Iris West."; 
	var modalText4 = "As one of the only people who could travel between dimensions unassisted, Barry was captured by the Anti-Monitor and mentally tortured byPsycho-Pirate. He was able to use the Psycho-Pirate to turn all of the Anti-Monitor's servants, the Thunderers, against him. This gave him enough time to destroy the Anti-Monitor's anti-matter cannon by running around it and destroying the outer casing. He ran so incredibly fast that he entered the Speed Forceforever, saving the remaining realities. His success came at great personal cost as Barry's body was consumed by the anti-matter weapon leaving behind just his costume and ring.";
	var modalText5 = "Officially and permanently returned to life, the cities he once called home celebrate, while Allen contemplates why he has been brought back. Soon after he encounters Savitar, a speedster villain. He catches up to the villain, but when he touches him Savitar turns to dust, telling Allen that he was the beginning and also the end. At that moment a number of heroes who are connected to the Speed Force experience painful convulsions. Soon it is revealed that Allen is becoming the new Black Flash, and he flees to the Speed Force to avoid harming any innocents. There he encounters other heroes who tell him that becoming the Black Flash is not his fault, and soon Professor Zoom, appears, revealing that he was responsible not only for Allen's resurrection, but also a number of tragedies in his life, including the murder of his mother.";

	var modalText = [modalText1, modalText2, modalText3, modalText4, modalText5];

	var questionNumbers = ['li:nth-child(1)', 'li:nth-child(2)', 'li:nth-child(3)', 'li:nth-child(4)', 'li:nth-child(5)'];

	questions[place].build();

	$('#submitBtn').click(function() {
		console.log(place);
		if (place < 4) {
			questions[place].check();
			place++;
			questions[place].build();
		}
		else if (place === 4) {
			questions[place].check();
			startOver();
		}
	});

	$('#nextBtn').click(function() {
		$('.overlay-container').hide();
		$("input:checked").prop('checked', false);
		$('.question-number').find(questionNumbers[place]).addClass('active-number');
	});

	$('#startoverBtn').click(function() {
		$('.overlay-container').hide();
		$("input:checked").prop('checked', false);
		$('.question-number').find(questionNumbers[0]).removeClass('active-number');
	});

	function modal() {
		$('.overlay-container').show();	
		$('.pop-out img').attr('src', images[place]);
		$('.overlay-container p').text(modalText[place]);
	}

	function startOver () {
		$('#nextBtn').hide();
		$('#startoverBtn').show();
		place = 0;
		questions[place].build();
	}
});