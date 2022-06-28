const add = function(x, y) {
	return x + y
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(z) {
  let x = 0;
    for (let i = 0; i < z.length; i++){
            x += z[i];
    }          
return x }

const multiply = function(z) {
let x = 1;
for (let i = 0; i < z.length; i++)
{
  x *= z[i];
}
return x

};

const power = function(x, y) {
	return x ** y
};

const factorial = function(x) {
	let cuenta = x += 1;
  let z = [];
  for (let i = 0; i < cuenta; i++){
    x -= 1;
    z.push(x);
  }
  z.pop();
  let c = 1;
  for (let i = 0; i < z.length; i++){
    c *= z[i];
  }
  return c;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
