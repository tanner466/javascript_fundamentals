var books = [
  {title: "The Hobbit",
  author: "J.R.R. Tolkien",
  alreadyRead: false
  },
  {title: "Moneyball",
  author: "Michael Lewis",
  alreadyRead: true
  },
  {title: "The Game",
  author: "Ken Dryden",
  alreadyRead: true
  },
  {title: "The Big Short",
  author: "Michael Lewis",
  alreadyRead: false
  }

];

for (var i=0; i<books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log("You already read \"" + books[i].title + "\" by " + books[i].author + ".");
  }
  else {
    console.log("You still need to read \"" + books[i].title + "\" by " + books[i].author + ".");
  }
}
