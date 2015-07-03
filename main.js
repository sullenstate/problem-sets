// >>>>>>>> Problem 1 <<<<<<<<
var firstReverse = function(string){
	
	var output = '';
	
	for (var i = string.length - 1 ; i >= 0; i--) {
		output += string.charAt(i);
	};
	
	return output;
};

// >>>>>>>> #1a <<<<<<<<
var firstReverse1a = function(string){
	
	var output = [];

	for(var i = 0; i <= string.length; i++){
		output.push(string.charAt(string.length - i));
	}; return output.join('');
};

// >>>>>>>> #1b <<<<<<<<
var firstReverse1b = function(string){
	return string.split('').reverse().join('');
};



console.log(firstReverse('Hello world!'));
console.log(firstReverse1a('This is a test'));
console.log(firstReverse1b('This is another test!'));
// >>>>>>>> End #1 <<<<<<<<


// >>>>>>>> Problem #2 <<<<<<<<
var swapCase = function(string){

	var output = '';

	for (var i = 0; i < string.length; i++) {

		var letter = string.charAt(i);

		if (letter === letter.toUpperCase()) {
			output += letter.toLowerCase();
		} else {
			output += letter.toUpperCase();
		}
	}; return output;
};

// >>>>>>>> #2a <<<<<<<<
var swapCase2a = function(string) {

	var stringArray = string.split('');
	
	var swapped = stringArray.map(function(element){
		return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
	});

	return swapped.join('');

};


console.log(swapCase('Hello World!'));
console.log(swapCase2a("Let's Try This One!"));
// >>>>>>>> End #2 <<<<<<<<

// >>>>>>>> Problem #3 <<<<<<<<
var letterCount = function(string){

	var stringArray = string.split(' ');
	// console.log(stringArray);
	var count = stringArray.map(function(element){

		var charArray = element.toLowerCase().split('').sort();
		var counter = [];
		var previousLetter = " ";

		// console.log(charArray);
		
		for ( var i = 0; i < charArray.length; i++ ) {
        	
        	if ( charArray[i] === previousLetter ) {
            	counter.push(1);
        	} 

        	previousLetter = charArray[i];
    	}

    	// console.log(counter);
    	return counter.length
	});

	// console.log(count);
	var indexOfMax = count.indexOf(Math.max.apply(null, count));

	return 'The word with the most repeating letters is "' + stringArray[indexOfMax] + '"';
};

console.log(letterCount('Today is the greatest day ever!'));
// >>>>>>>> End #3 <<<<<<<<

// >>>>>>>> #3 Alternate <<<<<<<<
var countMatchingLetters = function(string){
	var stringAsArray = string.split(' ');

	var letterCount = stringAsArray.map(function(letter){

		var characterArray = letter.split('');
		// console.log(characterArray);

		return characterArray.reduce(function(prev, next){
			prev[next] = ++prev[next] || 1;
			return prev;

		},{});
//	This  ^^ start value can be set as either an array (which gives an array of arrays the letter as key and the count as the property) or as
//	an object (which returns an array of objects)
	});

	// console.log(letterCount);
	var index = [];

	for (var i = 0; i < letterCount.length; i++) {
		var word = letterCount[i];
		var count = 0;

		for (x in word) {
			if (word[x] > 1) {
				count += word[x];
			}
		};
			index.push(count);
			// console.log(index);
	};
	
	var indexOfMax = index.indexOf(Math.max.apply(null, index));

	return index[indexOfMax] === 0 ? -1 : 'The word with the most repeating letters is "' + stringAsArray[indexOfMax] + '"';

};

console.log(countMatchingLetters('The greatest state of mississippi'));
// >>>>>>>> End #3 Alternate <<<<<<<<