function calculateAge(birthYear) {
  currentYear = new Date().getFullYear();
  ages = [(currentYear - 1 - birthYear), (currentYear - birthYear)];

  console.log ("You are either " + ages[0] + " or " + ages[1] + ".");
}

calculateAge(1991);
calculateAge(2000);
calculateAge(1989);
