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

// >>>>>>>> Problem Set 3 #1 <<<<<<<<
var palindrome = function(string){
	console.log(string.toLowerCase().replace(/\W/g, ''));
	console.log(string.toLowerCase().replace(/\W/g, '').split('').reverse().join(''));
	return string.toLowerCase().replace(/\W/g, '') === string.toLowerCase().replace(/\W/g, '').split('').reverse().join('') ? true : false;
};

console.log(palindrome('Now, sir, a war is never even – sir, a war is won!'));
// >>>>>>>> End #1 <<<<<<<<

// >>>>>>>> Problem Set 3 #2 <<<<<<<<
var dashInsert = function(num){
	var array = [];

	for (var i = 0, numArray = num.toString().split(''); i < numArray.length; i++) {
		array.push(numArray[i]);

		if (numArray[i] % 2 !== 0 && numArray[ i + 1 ] % 2 !== 0 && i + 1 < numArray.length) {
			array.push('-');
		}
	};

	return array.join('');
};

console.log(dashInsert(3309876531));
// >>>>>>>> End #2 <<<<<<<<

// >>>>>>>> Problem Set 3 #3 <<<<<<<<
var caesarCipher = function(string, shiftNum){
	var shifted = [];

	for (var i = 0; i < string.length; i++) {
	
		if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90 - shiftNum) || 
			(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122 - shiftNum)) {
			
			shifted.push(string.charCodeAt(i) + shiftNum);
		}
		else if (string.charCodeAt(i) > 122 - shiftNum && string.charCodeAt(i) <= 122) {
			var resetCode = string.charCodeAt(i) - 123;
			shifted.push(97 + shiftNum + resetCode);

		}
		else if (string.charCodeAt(i) > 90 - shiftNum && string.charCodeAt(i) <= 90) {
			var resetCode = string.charCodeAt(i) - 91;
			shifted.push(65 + shiftNum + resetCode);
		}
		else {
			shifted.push(string.charCodeAt(i));
		}
	}
	return String.fromCharCode.apply(null, shifted);
};

console.log(caesarCipher('Caesar Cipher!', 5));
// >>>>>>>> End #3 <<<<<<<<

// >>>>>>>> Problem Set 4 #1 <<<<<<<<
var addNumbers = function(string){
	var arr = string.split('').filter(function(char){
		return char !== ' ';
	});
	var numSum = 0;
	var numArr = [];
	var total = 0;

	for (var i = 0; i < arr.length; i++) {
		if (!isNaN(Number(arr[i]))) {
			numSum += Number(arr[i]);
			for (var j = i+1; j < arr.length + 1; j++) {
				if (!isNaN(Number(arr[j]))) {
					numSum += arr[j];
				}
				else {
					i += j;
					numArr.push(numSum);
					numSum = 0;
				}
			};
		}
	};
	for (var i = 0; i < numArr.length; i++) {
		if (Number.isInteger(numArr[i])) {
			total += numArr[i];
		}
		else {
			total += Number(numArr[i]);
		}
	};
	return total;
};
//Solution doesn't work if there is a space in the string...
console.log(addNumbers('888Hello 3world2'));
// >>>>>>>> End #1 <<<<<<<<

// >>>>>>>> Problem Set 4 #2 <<<<<<<<
var longestWord = function(string){
	var arr = string.split(' ');
	var lengthArray = [];

	for (var i = 0; i < arr.length; i++) {
		lengthArray.push(arr[i].length);
	};

	var indexOfMax = Math.max.apply(null, lengthArray);

	return arr[indexOfMax];
};

console.log(longestWord('Its the end of the world as we know it'));
// >>>>>>>> End #2 <<<<<<<<

// >>>>>>>> Problem Set 4 #3 <<<<<<<<
var averageStringNumbers = function(string){
	var arr = string.split('').filter(function(char){
		return char !== ' '
	});
	var letterArr = [];
	var total = 0;

	for (var i = 0; i < arr.length; i++) {
		var charVal = arr[i].charCodeAt(0);
		
		if (charVal > 64 && charVal < 91 || charVal > 96 && charVal < 123) {
			letterArr.push(arr[i]);
		}
		else {
			if (!isNaN(+arr[i])) {
				total += +arr[i];
			};
		}
	};

	return Math.round( total / letterArr.length );
};

console.log(averageStringNumbers('Hello6 9World 2, Nic8e D7ay!'));
// >>>>>>>> End #3 <<<<<<<<