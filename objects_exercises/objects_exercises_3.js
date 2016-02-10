var braveheart = {
  title: "Braveheart",
  duration: 178,
  stars: [
    "Mel Gibson",
    "Sophie Marceau",
    "Catherine McCormack",
    "Patrick McGoohan",
    "Brendan Gleeson"
  ]
}

function printMovie(movie) {
  var printString = movie.title + " lasts " + movie.duration + " for minutes. Stars: ";
  for (var i=0; i<movie.stars.length; i++) {
    printString += movie.stars[i];
    if (i<movie.stars.length-1) {
      printString += ", ";
    }
    else {
      printString += ".";
    }
  }
  console.log(printString);

}

printMovie(braveheart);
