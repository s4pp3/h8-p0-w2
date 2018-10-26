// soal nomor 1
console.log("---------Nomor 1---------");
var loop = 0,number1=2;
while(loop < 20){
	if(loop < 10){
		if(loop == 0)
			console.log("LOOPING PERTAMA");
		console.log(number1+" - I love coding");
		number1 = number1+2;
	}else{
		number1 = number1-2;
		if(loop == 10)
			console.log("LOOPING KEDUA");
		console.log(number1+" - I will become fullstack developer");
	}
	loop++;
}

// soal nomor 2
console.log("---------Nomor 2---------");
var number2 = 1;
for(var i=0;i<40;i++){
	if(i < 20){
		if(i == 0)
			console.log("LOOPING PERTAMA");
		console.log(number2+" - I love coding");
		number2 = number2+1;
	}else{
		number2 = number2-1;
		if(i == 20)
			console.log("LOOPING KEDUA");
		console.log(number2+" - I will become fullstack developer");
	}
}

// soal nomor 3
// ganjil genap
console.log("---------Nomor 3 GANJIL GENAP---------");
var counter1 = 1;
while(counter1 <= 100){
	if(counter1%2 == 0)
		console.log("GENAP");
	else
		console.log("GANJIL");
	counter1++;
}
// pertambahan 2
console.log("---------Nomor 3 KELIPATAN 3---------");
var counter2 = 1;
while(counter2 <= 100){
	if(counter2%3 == 0)
		console.log(counter2+" KELIPATAN "+counter2);
	counter2++;
}
// pertambahan 5
console.log("---------Nomor 3 KELIPATAN 6---------");
var counter3 = 1;
while(counter3 <= 100){
	if(counter3%6 == 0)
		console.log(counter3+" KELIPATAN "+counter3);
	counter3++;
}
// pertambahan 9
console.log("---------Nomor 3 KELIPATAN 10---------");
var counter4 = 1;
while(counter4 <= 100){
	if(counter4%10 == 0)
		console.log(counter4+" KELIPATAN "+counter4);
	counter4++;
}
