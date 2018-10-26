// soal nomor 1
console.log("---------Nomor 1---------");
var word = 'JavaScript',
	second = 'is',
	third = 'awesome',
	fourth = 'and',
	fifth = 'I',
	sixth = 'love',
	seventh = 'it!';
console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);

// soal nomor 2
console.log("---------Nomor 2---------");
var word = 'wow JavaScript is so cool',
	firstWord = word[0]+word[1]+word[2],
	secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13],
	thirdWord = word[15]+word[16],
	fourthWord = word[18]+word[19],
	fifthWord = word[21]+word[22]+word[23]+word[24];
console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// soal nomor 3
console.log("---------Nomor 3---------");
var word = 'wow JavaScript is so cool',
	firstWord = word.substring(0, 3),
	secondWord = word.substring(4, 14),
	thirdWord = word.substring(15, 17),
	fourthWord = word.substring(18, 20),
	fifthWord = word.substring(21, 25);
console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// soal nomor 4
console.log("---------Nomor 4---------");
var word = 'wow JavaScript is so cool',
	firstWord = word.substring(0, 3),
	secondWord = word.substring(4, 14),
	thirdWord = word.substring(15, 17),
	fourthWord = word.substring(18, 20),
	fifthWord = word.substring(21, 25);
console.log('First Word: ' + firstWord + ', with length: ' + firstWord.length);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWord.length);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWord.length);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWord.length);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWord.length);