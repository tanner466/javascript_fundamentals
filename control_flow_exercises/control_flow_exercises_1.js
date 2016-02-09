function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }

  else if (num2 > num1) {
    return num2;
  }

  else {
    console.log("Numbers are equal or something.");
  }
}

console.log(greaterNum(1, 2));

console.log(greaterNum(64, 46));
