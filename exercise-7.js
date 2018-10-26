// soal nomor 1
console.log("---------Nomor 1---------");
var rows1 = 5;
for(var i=0;i<rows1;i++){
	console.log("*");
}
// soal nomor 2
console.log("---------Nomor 2---------");
var rows2 = 5;
for(var i=0;i<rows2;i++){
	var star2="";
	for(var j=0;j<rows2;j++){
		star2 = star2 + "*";
	}
	console.log(star2);
}
// soal nomor 3
console.log("---------Nomor 3---------");
var rows3 = 5;
for(var i=0;i<rows3;i++){
	var star3="*";
	for(var j=0;j<i;j++){
		star3 = star3+"*";
	}
	console.log(star3);
}