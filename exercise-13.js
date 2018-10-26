function xo(str) {
  var x_amount = 0,o_amount = 0;
  for(var i=0;i<str.length;i++){
  	if(str[i] == 'x')
  		x_amount++;
  }
  o_amount = str.length - x_amount;
  return x_amount == o_amount;
}
console.log(xo('xoxoxo'));