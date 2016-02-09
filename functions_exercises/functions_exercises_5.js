function celsiusToFahrenheit(celsius) {
  var convertedF = celsius * 9/5 + 32;

  console.log(celsius + "°C is " + convertedF + "°F");
}

function fahrenheitToCelsius(fahrenheit) {
  var convertedC = (fahrenheit - 32) * 5/9;

  console.log(fahrenheit + "°F is " + convertedC + "°C");
}

celsiusToFahrenheit(100);
celsiusToFahrenheit(20);

fahrenheitToCelsius(32);
fahrenheitToCelsius(-40);
