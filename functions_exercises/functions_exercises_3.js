function calculateSupply(age, amountPerDay) {
  var maximumAge = 100;

  var total = (maximumAge - age) * 365 * amountPerDay;

  console.log("You will need " + total + " to last you until the ripe old age of " + maximumAge + ".");
}

calculateSupply(24, 2);
calculateSupply(20, 3);
calculateSupply(50, 5);
