var Word = require ("./word.js");
var prompt = require("prompt");

prompt.start();
game = {
	wordBank : [ "coffee", "cappuccino", "monster", "latte", "espresso"],
	wordsWon: 0,
	guessesLeft: 10,
	currentWrd: null,

	startGame: function(wrd){
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		this.currentWrd.getLet();
		this.promptUser();
	},

	resetGuesses: function(){
		this.guessesLeft = 10;
	},

	promptUser: function(){
		var self = this;
		prompt.get(["guessLet"], function(err, result){
			console.log("guess: "+result.guessLet);
			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);
			if (manyGuessed==0) {
				console.log("try again");
				self.guessesLeft--;
			}
				 else {
				 	console.log("correct");
				 	if (self.currentWrd.findWord()) {
				 		console.log("you win!");
				 		console.log("---------");
				 		return;
				 	}
				}
				console.log("guesses left: " + self.guessesLeft);
				console.log("============");
				if((self.guessesLeft>0)&&(self.currentWrd.found == false)){
					self.promptUser();
				}
				else if (self.guessesLeft == 0){
					console.log("game over. we were looking for ", self.currentWrd.target);

				} else {
					console.log(self.currentWrd.wordRender());
				}

		});
	}

};
game.startGame();
