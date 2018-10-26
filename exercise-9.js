// tugas 1
console.log("---------TUGAS 1---------");
function shoutOut(){
	return "Hello function!";
}
console.log(shoutOut());

// tugas 2
console.log("---------TUGAS 2---------");
function calculateMultiply(a,b){
	return a*b;
}
var num1 = 5,num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// tugas 3
console.log("---------TUGAS 3---------");
function processSentence(name,age,address,hobby){
	return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
}
var name = "Agus",
	age = 30,
	address = "Jln. Malioboro, Yogjakarta",
	hobby = "gaming",
	fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);