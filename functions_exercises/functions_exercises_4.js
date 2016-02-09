function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference + ".");
}

function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  console.log("The area is " + area + ".");
}

calcCircumference(64);
calcCircumference(13);

calcArea(54);
calcArea(54);
