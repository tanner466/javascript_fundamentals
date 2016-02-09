function pluralize(noun, number) {
  if (number === 1) {
    return "1 " + noun;
  }
  else {
    if (noun === "sheep") {
      return number + " " + noun;
    }
    else if (noun === "goose") {
      return number + " geese";
    }
    else if (noun == "moose") {
      return number + " " + noun;
    }
    else {
      return number + " " + noun + "s";
    }
  }

}

console.log(pluralize("rabbit", 5));
console.log(pluralize("sheep", 5));
console.log(pluralize("goose", 5));
console.log(pluralize("moose", 5));
console.log(pluralize("duck", 1));
