function assignGrade(numberScore) {
  if (numberScore >= 80) {
    return "A";
  }

  else if (numberScore >= 70) {
    return "B";
  }

  else if (numberScore >= 60) {
    return "C";
  }

  else if (numberScore >= 50) {
    return "D";
  }

  else {
    return "F";
  }
}

console.log(assignGrade(85));
console.log(assignGrade(35));
console.log(assignGrade(60));
console.log(assignGrade(75));
