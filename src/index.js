module.exports = function reverse (n) {
  let x;
  let a = '';
  if (n < 0) x = (n * -1).toString();
  else x = n.toString();
  x.split('');
  for(y = x.length-1; y >= 0; y--)
  {
	a += x[y];  
  }
  return Number(a);
}
