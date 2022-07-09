const ftoc = function(f) {

  let conversion = (f - 32) * (5/9);

  if (!(Number.isInteger(conversion))) {

    let rounded = parseFloat(conversion.toFixed(1));

    return rounded;

  }

  return conversion;

};

const ctof = function(c) {

  let conversion = (c * (9/5)) + 32;

  if (!(Number.isInteger(conversion))) {

    let rounded = parseFloat(conversion.toFixed(1));

    return rounded;

  }

  return conversion;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
