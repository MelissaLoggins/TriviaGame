var panel = $('#quiz-area');

// click events~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).on('click', '#start', function(e) {
	game.start();
});

$(document).on('click', '#done', function(e) {
	game.done();
});

// Questions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var questions = [{
	question: "1. In \"The Little Mermaid\", which is NOT one of Triton's daughters?", 
	answers: ["Andrina", "Adora", "Attina", "Alana"],
	correctAnswer: "Attina"
}, {
	question: "2. What instrument does Grumpy play in \"Snow White and the Seven Dwarfs\"?", 
	answers: ["accordion", "piano", "organ", "bass"],
	correctAnswer: "organ"
}, {
	question: "3. What is the name of Mickey Mouse\'s dog?", 
	answers: ["Goofy", "Spike", "Pluto", "Cooper"],
	correctAnswer: "Pluto"
}, {
	question: "4. In \"Mary Poppins\", what song does Mary sing to the children to motivate them to tidy up?", 
	answers: ["\"Whistle While You Work\"", "\"A Spoon Full of Sugar\"", "\"Happy Working Song\"", "\"It's the Hardknock Life\""],
	correctAnswer: "\"A Spoon Full of Sugar\""
}, {
	question: "5. What does Ursula take from Ariel in \"The Little Mermaid\"?", 
	answers: ["Her legs", "Her freedom", "Her voice", "Her heart"],
	correctAnswer: "Her voice"
}, {
	question: "6. According to Maleficent\'s spell, how old would Princess Aurora be when she would \"prick her finger on the spindle of a spinning wheel and die\"?", 
	answers: ["18", "12", "16", "14"],
	correctAnswer: "16"
}, {
	question: "7. In the animated feature \"Alice in Wonderland\", who serves as the master of ceremonies for the Great Caucus Race?", 
	answers: ["Dodo", "the Mad Hatter", "the Walrus", "the Dormouse"],
	correctAnswer: "Dodo"
}, {
	question: "8. What is the Beast\'s true name in \"Beauty and the Beast\"?", 
	answers: ["Prince William", "Leroy", "Prince Adam", "Gaston"],
	correctAnswer: "Prince Adam"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:60,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Score</button>');
  },
  done: function() {

	    $.each($("input[name='question-0']:checked"), function() {
	    	if ($(this).val() == questions[0].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-1']:checked"), function() {
	    	if ($(this).val() == questions[1].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-2']:checked"), function() {
	    	if ($(this).val() == questions[2].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-3']:checked"), function() {
	    	if ($(this).val() == questions[3].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-4']:checked"), function() {
	    	if ($(this).val() == questions[4].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-5']:checked"), function() {
	    	if ($(this).val() == questions[5].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-6']:checked"), function() {
	    	if ($(this).val() == questions[6].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });
	    $.each($("input[name='question-7']:checked"), function() {
	    	if ($(this).val() == questions[7].correctAnswer) {
	    	  game.correct++;
	    	} else {
	    	  game.incorrect++;
	    	}
	    });

	           this.result();
	        },
	           result: function() {

	           	clearInterval(timer);

	           	$('#subwrapper h2').remove();
	           	panel.html('<h2>The End.<h2>');
	           	panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
	           	panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
	           	panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
	        }
 };
