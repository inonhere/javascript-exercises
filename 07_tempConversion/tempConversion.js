const ftoc = function(x) {

  var formula = (x - 32) * (5/9);
  var roun = Math.round(formula * 10) / 10;
    return roun;

};

const ctof = function(y) {
  var formulita = (y) * (9/5) + 32;
  var rondita = Math.round(formulita * 10) / 10;
    return rondita

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
