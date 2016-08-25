var Converter = {}

Converter.celsiusToFahrenheit = function(cDegree) {
<<<<<<< HEAD
  return Math.round((cDegree * 9 / 5) + 32);
=======
  // TODO: Return calculated Value
>>>>>>> 995813726008ddc3f070c726276fff768d2964b5
}

Converter.fahrenheitToCelsius = function(fDegree) {
  return Math.round((fDegree - 32) * 5 / 9);
}

module.exports = Converter;