const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	if (args.length === 0) return parseInt(args.length);
  return args.reduce((total, number) => total + number, 0);
};

const multiply = function(args) {
	if (args.length === 0) return parseInt(args.length);
  return args.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {

  if (n === 0) return 1;

  return n * factorial(n-1);
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
