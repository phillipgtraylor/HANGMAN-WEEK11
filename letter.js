var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		if (this.appear) {"_"} else this.charac;
	};
};

module.exports = letter;
