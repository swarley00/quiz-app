$(document).ready(function() {
	Question1();	

	$('input').click(function () {
		console.log($(this).val());
	});

	function shuffle(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;
  
  		while (0 !== currentIndex) {
    		randomIndex = Math.floor(Math.random()*currentIndex);
    		currentIndex -= 1;
    
    		temporaryValue = array[currentIndex];
    		array[currentIndex] = array[randomIndex];
    		array[randomIndex] = temporaryValue;
  		}

  		return array;
	}

	function QuizItem (question, answer, wrongAnswers) {
		this.question = question;
		this.answer = answer;
		this.wrongAnswers = wrongAnswers;
	}

	function Question1 () {
		var question1 = new QuizItem ('How does Barry Allen gain his powers?', 'Struck By Lightning', ['Kryptonite', 'An Alien Ring', 'Lab Experiments']);
		$('.question').text(question1.question);

		var answers = new Array ();
		answers[0] = 'Kryptonite';
		answers[1] = 'Struck By Lightning';
		answers[2] = 'An Alien Ring';
		answers[3] = 'Lab Experiments';

		shuffle(answers);
		$('#1 .wronganswer1').text(answers[0]);
		$('#2 .answer').text(answers[1]);
		$('#3 .wronganswer2').text(answers[2]);
		$('#4 .wronganswer3').text(answers[3]);

		$('#submitBtn').click(function() {
			if($('input:checked').val() === "B") {
				console.log("right answer");

				$('.overlay-container').show();	
				$('h2').text("You're Correct!");
				$('.pop-out img').attr('src', 'images/answer1.jpg');
				$('.overlay-container p').text('After graduating, Allen found work with the Central City Police Department as a police scientist, with a well-known habit for slowness and lateness. Working late in the lab one night, a rack of chemicals that he was working next to was struck by lightning, and Allen was doused in chemicals. Surprisingly unharmed, Allen cleaned up the mess and returned to work, but soon noticed that the world appeared to be moving much slower than normal. He soon realized that it was not the world that had slowed, but himself who had sped up.');
				
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(2)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			else {
				console.log("wrong answer");

				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('.pop-out img').attr('src', 'images/answer1.jpg');
				$('.overlay-container p').text('After graduating, Allen found work with the Central City Police Department as a police scientist, with a well-known habit for slowness and lateness. Working late in the lab one night, a rack of chemicals that he was working next to was struck by lightning, and Allen was doused in chemicals. Surprisingly unharmed, Allen cleaned up the mess and returned to work, but soon noticed that the world appeared to be moving much slower than normal. He soon realized that it was not the world that had slowed, but himself who had sped up.');
				
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(2)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			Question2();
		});
	}

	function Question2 () {
		var question2 = new QuizItem ('What comic did Barry first appear in?', 'Showcase #4', ['Flash Comics #1', 'Superman #199', 'Flash #167']);

		$('.question').text(question2.question);
		$('.answer').text(question2.answer);
		$('.wronganswer1').text(question2.wrongAnswers[0]);
		$('.wronganswer2').text(question2.wrongAnswers[1]);
		$('.wronganswer3').text(question2.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if($('input:checked').val() === "B") {
				console.log("right answer");

				$('.overlay-container').show();	
				$('h2').text("You're Correct!");
				$('.pop-out img').attr('src', 'images/answer2.jpg');
				$('.overlay-container p').text('Barry Allen was created by Robert Kanigher, John Broome and Carmine Infantino. He made his first comic book appearance in October 1956 in the pages of Showcase #4.');
				
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(3)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			else {
				console.log("wrong answer");

				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('.pop-out img').attr('src', 'images/answer2.jpg');
				$('.overlay-container p').text('Barry Allen was created by Robert Kanigher, John Broome and Carmine Infantino. He made his first comic book appearance in October 1956 in the pages of Showcase #4.');
			
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(3)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			Question3();
		});
	}

	function Question3 () {
		var question3 = new QuizItem ("Who is Barry's archenemy?", 'Professor Zoom', ['Captain Cold', 'Joker', 'Sinestro']);

		$('.question').text(question3.question);
		$('.answer').text(question3.answer);
		$('.wronganswer1').text(question3.wrongAnswers[0]);
		$('.wronganswer2').text(question3.wrongAnswers[1]);
		$('.wronganswer3').text(question3.wrongAnswers[2]);

		$('#submitBtn').click(function() {
			if($('input:checked').val() === "B") {
				console.log("right answer");

				$('.overlay-container').show();	
				$('h2').text("You're Correct!");
				$('.pop-out img').attr('src', 'images/answer3.jpg');
				$('.overlay-container p').text("Eobard Thawne was born in the 25th century, and eventually became the second Reverse Flash. His powers are similar to those of Barry Allen's (The Flash). However, while The Flash's powers come from his ability to tap into the Speed Force, Reverse Flash's come from his ability to tap into the negative speed force, which causes destruction. He also goes by the name Professor Zoom. He is best known for being the archenemy of Barry Allen, as well as murdering Barry's mother and his true love, Iris West."); 

				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(4)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			else {
				console.log("wrong answer");

				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('.pop-out img').attr('src', 'images/answer3.jpg');
				$('.overlay-container p').text("Eobard Thawne was born in the 25th century, and eventually became the second Reverse Flash. His powers are similar to those of Barry Allen's (The Flash). However, while The Flash's powers come from his ability to tap into the Speed Force, Reverse Flash's come from his ability to tap into the negative speed force, which causes destruction. He also goes by the name Professor Zoom. He is best known for being the archenemy of Barry Allen, as well as murdering Barry's mother and his true love, Iris West.");

				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(4)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			Question4();
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
			if($('input:checked').val() === "B") {
				console.log("right answer");

				$('.overlay-container').show();	
				$('h2').text("You're Correct!");
				$('.pop-out img').attr('src', 'images/answer4.jpg');
				$('.overlay-container p').text("As one of the only people who could travel between dimensions unassisted, Barry was captured by the Anti-Monitor and mentally tortured byPsycho-Pirate. He was able to use the Psycho-Pirate to turn all of the Anti-Monitor's servants, the Thunderers, against him. This gave him enough time to destroy the Anti-Monitor's anti-matter cannon by running around it and destroying the outer casing. He ran so incredibly fast that he entered the Speed Forceforever, saving the remaining realities. His success came at great personal cost as Barry's body was consumed by the anti-matter weapon leaving behind just his costume and ring.");
				
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			else {
				console.log("wrong answer");

				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('.pop-out img').attr('src', 'images/answer4.jpg');
				$('.overlay-container p').text("As one of the only people who could travel between dimensions unassisted, Barry was captured by the Anti-Monitor and mentally tortured byPsycho-Pirate. He was able to use the Psycho-Pirate to turn all of the Anti-Monitor's servants, the Thunderers, against him. This gave him enough time to destroy the Anti-Monitor's anti-matter cannon by running around it and destroying the outer casing. He ran so incredibly fast that he entered the Speed Forceforever, saving the remaining realities. His success came at great personal cost as Barry's body was consumed by the anti-matter weapon leaving behind just his costume and ring.");
			
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(5)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			Question5();
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
			if($('input:checked').val() === "B") {
				console.log("right answer");

				$('.overlay-container').show();	
				$('h2').text("You're Correct!");
				$('.pop-out img').attr('src', 'images/answer5.jpg');
				$('.overlay-container p').text("Officially and permanently returned to life, the cities he once called home celebrate, while Allen contemplates why he has been brought back. Soon after he encounters Savitar, a speedster villain. He catches up to the villain, but when he touches him Savitar turns to dust, telling Allen that he was the beginning and also the end. At that moment a number of heroes who are connected to the Speed Force experience painful convulsions. Soon it is revealed that Allen is becoming the new Black Flash, and he flees to the Speed Force to avoid harming any innocents. There he encounters other heroes who tell him that becoming the Black Flash is not his fault, and soon Professor Zoom, appears, revealing that he was responsible not only for Allen's resurrection, but also a number of tragedies in his life, including the murder of his mother.");
				
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(6)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
			else {
				console.log("wrong answer");

				$('.overlay-container').show();
				$('h2').text('You Were So Close...');
				$('.pop-out img').attr('src', 'images/answer5.jpg');
				$('.overlay-container p').text("Officially and permanently returned to life, the cities he once called home celebrate, while Allen contemplates why he has been brought back. Soon after he encounters Savitar, a speedster villain. He catches up to the villain, but when he touches him Savitar turns to dust, telling Allen that he was the beginning and also the end. At that moment a number of heroes who are connected to the Speed Force experience painful convulsions. Soon it is revealed that Allen is becoming the new Black Flash, and he flees to the Speed Force to avoid harming any innocents. There he encounters other heroes who tell him that becoming the Black Flash is not his fault, and soon Professor Zoom, appears, revealing that he was responsible not only for Allen's resurrection, but also a number of tragedies in his life, including the murder of his mother.");
			
				$('#nextBtn').click(function() {
					$('.overlay-container').hide();
					$('.question-number').find('li:nth-child(6)').css({
						'color': 'white',
						'background-color': '#f2bc1a',
						'border': '2px solid #f2d264',
						'border-radius': '2em'});
					$("input:checked").prop('checked', false);
				});
			}
		});
	}
});