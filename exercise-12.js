function konversiMenit(menit) {
	if(menit%60 < 10)
		return Math.floor(menit/60)+":0"+menit%60;
	return Math.floor(menit/60)+":"+menit%60;
}
console.log(konversiMenit(63));